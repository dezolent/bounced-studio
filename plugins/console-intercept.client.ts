export default () => {
  // only runs in the browser
  window.myFlag = true
  const orig = console.error.bind(console)
  console.error = (...args: any[]) => {
    // your intercept logic…
    orig(...args)
  }
}