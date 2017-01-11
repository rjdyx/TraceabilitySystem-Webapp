
export function createView (component) {
  return {
    name: `${component.name}`,
    // this will be called during SSR to pre-fetch data into the store!
    preFetch (store) {
      // return store.dispatch('FETCH_LIST_DATA', { type })
    },
    render (h) {
      return h(component)
    }
  }
}
