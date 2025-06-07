// /plugins/console-intercept.client.ts
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // this code only runs in the browser
  if (process.client) {
    // set your flag
    ;(window as any).myFlag = true

    // override console.error
    const origError = console.error.bind(console)
    console.error = (...args: unknown[]) => {
      // …your intercept logic here…
      origError(...args)
    }
  }
})