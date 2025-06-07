import { defineStore } from 'pinia'

interface CartItem {
  variantId: string
  productId: string
  title: string
  price: number
  quantity: number
  image?: string
  variant: string
  lineId?: string
}

interface CartState {
  items: CartItem[]
  cartId: string | null
  checkoutUrl: string | null
  isLoading: boolean
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
    cartId: null,
    checkoutUrl: null,
    isLoading: false
  }),

  getters: {
    itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0),
    isEmpty: (state) => state.items.length === 0
  },

  actions: {
    addItem(item: Omit<CartItem, 'quantity' | 'lineId'> & { quantity?: number }) {
      const existingItem = this.items.find(i => i.variantId === item.variantId)
      
      if (existingItem) {
        existingItem.quantity += item.quantity || 1
      } else {
        this.items.push({
          ...item,
          quantity: item.quantity || 1
        })
      }
      
      this.syncWithShopify()
    },

    removeItem(variantId: string) {
      const index = this.items.findIndex(item => item.variantId === variantId)
      if (index > -1) {
        this.items.splice(index, 1)
        this.syncWithShopify()
      }
    },

    updateQuantity(variantId: string, quantity: number) {
      const item = this.items.find(i => i.variantId === variantId)
      if (item) {
        if (quantity <= 0) {
          this.removeItem(variantId)
        } else {
          item.quantity = quantity
          this.syncWithShopify()
        }
      }
    },

    clearCart() {
      this.items = []
      this.cartId = null
      this.checkoutUrl = null
    },

    async syncWithShopify() {
      if (this.items.length === 0) {
        this.cartId = null
        this.checkoutUrl = null
        return
      }

      this.isLoading = true
      const { createCart, getCart, cartLinesAdd, cartLinesUpdate, cartLinesRemove } = useShopify()

      try {
        if (!this.cartId) {
          // Create new cart
          const lines = this.items.map(item => ({
            merchandiseId: item.variantId,
            quantity: item.quantity
          }))

          const result = await createCart(lines)
          
          if (result.cartCreate.cart) {
            this.cartId = result.cartCreate.cart.id
            this.checkoutUrl = result.cartCreate.cart.checkoutUrl
            
            // Update items with lineIds
            result.cartCreate.cart.lines.edges.forEach((edge: any, index: number) => {
              if (this.items[index]) {
                this.items[index].lineId = edge.node.id
              }
            })
          }

          if (result.cartCreate.userErrors?.length) {
            console.error('Cart creation errors:', result.cartCreate.userErrors)
          }
        } else {
          // Get current cart state from Shopify
          const currentCartResult = await getCart(this.cartId)
          
          if (!currentCartResult.cart) {
            // Cart doesn't exist anymore, create a new one
            this.cartId = null
            return this.syncWithShopify()
          }

          const shopifyLines = currentCartResult.cart.lines.edges.map((edge: any) => edge.node)
          
          // Find items to add, update, or remove
          const linesToAdd: Array<{ merchandiseId: string; quantity: number }> = []
          const linesToUpdate: Array<{ id: string; quantity: number }> = []
          const lineIdsToRemove: string[] = []

          // Check for items to add or update
          for (const localItem of this.items) {
            const shopifyLine = shopifyLines.find((line: any) => 
              line.merchandise.id === localItem.variantId
            )

            if (shopifyLine) {
              // Update lineId if not set
              if (!localItem.lineId) {
                localItem.lineId = shopifyLine.id
              }
              
              // Update quantity if different
              if (shopifyLine.quantity !== localItem.quantity) {
                linesToUpdate.push({
                  id: shopifyLine.id,
                  quantity: localItem.quantity
                })
              }
            } else {
              // Add new item
              linesToAdd.push({
                merchandiseId: localItem.variantId,
                quantity: localItem.quantity
              })
            }
          }

          // Check for items to remove
          for (const shopifyLine of shopifyLines) {
            const localItem = this.items.find(item => item.variantId === shopifyLine.merchandise.id)
            if (!localItem) {
              lineIdsToRemove.push(shopifyLine.id)
            }
          }

          // Execute cart updates
          if (lineIdsToRemove.length > 0) {
            const result = await cartLinesRemove(this.cartId, lineIdsToRemove)
            if (result.cartLinesRemove.cart) {
              this.checkoutUrl = result.cartLinesRemove.cart.checkoutUrl
            }
          }

          if (linesToAdd.length > 0) {
            const result = await cartLinesAdd(this.cartId, linesToAdd)
            if (result.cartLinesAdd.cart) {
              this.checkoutUrl = result.cartLinesAdd.cart.checkoutUrl
              
              // Update lineIds for newly added items
              const newLines = result.cartLinesAdd.cart.lines.edges.map((edge: any) => edge.node)
              for (const localItem of this.items) {
                if (!localItem.lineId) {
                  const matchingLine = newLines.find((line: any) => 
                    line.merchandise.id === localItem.variantId
                  )
                  if (matchingLine) {
                    localItem.lineId = matchingLine.id
                  }
                }
              }
            }
          }

          if (linesToUpdate.length > 0) {
            const result = await cartLinesUpdate(this.cartId, linesToUpdate)
            if (result.cartLinesUpdate.cart) {
              this.checkoutUrl = result.cartLinesUpdate.cart.checkoutUrl
            }
          }
        }
      } catch (error) {
        console.error('Failed to sync cart with Shopify:', error)
        
        if (error instanceof Error && error.message.includes('Cart not found')) {
          // Cart was deleted, reset and try again
          this.cartId = null
          this.items.forEach(item => delete item.lineId)
          return this.syncWithShopify()
        }
      } finally {
        this.isLoading = false
      }
    },

    async checkout() {
      if (this.checkoutUrl) {
        window.open(this.checkoutUrl, '_blank')
      } else {
        console.warn('No checkout URL available. Please ensure cart is synced with Shopify.')
      }
    }
  },

  persist: {
    storage: persistedState.localStorage
  }
})