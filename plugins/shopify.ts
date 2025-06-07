export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  const shopifyClient = {
    async query(query: string, variables: Record<string, any> = {}) {
      const response = await $fetch(`https://${config.public.shopifyStoreName}/api/2024-04/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': config.public.shopifyAccessToken,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })
      
      if (response.errors) {
        throw new Error(response.errors[0].message)
      }
      
      return response.data
    }
  }

  return {
    provide: {
      shopify: shopifyClient
    }
  }
})