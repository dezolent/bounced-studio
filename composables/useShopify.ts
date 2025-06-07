export const useShopify = () => {
  const { $shopify } = useNuxtApp()

  const getProducts = async (first: number = 20, after?: string) => {
    const query = `
      query getProducts($first: Int!, $after: String) {
        products(first: $first, after: $after) {
          edges {
            node {
              id
              title
              handle
              description
              tags
              vendor
              productType
              createdAt
              updatedAt
              images(first: 5) {
                edges {
                  node {
                    id
                    url
                    altText
                    width
                    height
                  }
                }
              }
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    compareAtPrice {
                      amount
                      currencyCode
                    }
                    availableForSale
                    selectedOptions {
                      name
                      value
                    }
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    `
    
    return await $shopify.query(query, { first, after })
  }

  const getProduct = async (handle: string) => {
    const query = `
      query getProduct($handle: String!) {
        product(handle: $handle) {
          id
          title
          handle
          description
          descriptionHtml
          tags
          vendor
          productType
          createdAt
          updatedAt
          images(first: 10) {
            edges {
              node {
                id
                url
                altText
                width
                height
              }
            }
          }
          variants(first: 20) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                availableForSale
                quantityAvailable
                selectedOptions {
                  name
                  value
                }
                image {
                  id
                  url
                  altText
                  width
                  height
                }
              }
            }
          }
          options {
            id
            name
            values
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    `
    
    return await $shopify.query(query, { handle })
  }

  const createCart = async (lines: Array<{ merchandiseId: string; quantity: number }>) => {
    const query = `
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            id
            checkoutUrl
            totalQuantity
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
              totalTaxAmount {
                amount
                currencyCode
              }
            }
            lines(first: 250) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                      product {
                        title
                      }
                      image {
                        url
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `
    
    return await $shopify.query(query, {
      input: {
        lines: lines.map(line => ({
          merchandiseId: line.merchandiseId,
          quantity: line.quantity
        }))
      }
    })
  }

  const getCart = async (cartId: string) => {
    const query = `
      query getCart($cartId: ID!) {
        cart(id: $cartId) {
          id
          checkoutUrl
          totalQuantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            totalTaxAmount {
              amount
              currencyCode
            }
          }
          lines(first: 250) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    product {
                      title
                    }
                    image {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
    
    return await $shopify.query(query, { cartId })
  }

  const cartLinesAdd = async (cartId: string, lines: Array<{ merchandiseId: string; quantity: number }>) => {
    const query = `
      mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            id
            checkoutUrl
            totalQuantity
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
              totalTaxAmount {
                amount
                currencyCode
              }
            }
            lines(first: 250) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                      product {
                        title
                      }
                      image {
                        url
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `
    
    return await $shopify.query(query, {
      cartId,
      lines: lines.map(line => ({
        merchandiseId: line.merchandiseId,
        quantity: line.quantity
      }))
    })
  }

  const cartLinesUpdate = async (cartId: string, lines: Array<{ id: string; quantity: number }>) => {
    const query = `
      mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
          cart {
            id
            checkoutUrl
            totalQuantity
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
              totalTaxAmount {
                amount
                currencyCode
              }
            }
            lines(first: 250) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                      product {
                        title
                      }
                      image {
                        url
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `
    
    return await $shopify.query(query, { cartId, lines })
  }

  const cartLinesRemove = async (cartId: string, lineIds: string[]) => {
    const query = `
      mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart {
            id
            checkoutUrl
            totalQuantity
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
              totalTaxAmount {
                amount
                currencyCode
              }
            }
            lines(first: 250) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                      product {
                        title
                      }
                      image {
                        url
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `
    
    return await $shopify.query(query, { cartId, lineIds })
  }

  return {
    getProducts,
    getProduct,
    createCart,
    getCart,
    cartLinesAdd,
    cartLinesUpdate,
    cartLinesRemove
  }
}