import { app, router, store } from './index'

const isDev = process.env.NODE_ENV !== 'production'


export default context => {
  const s = isDev && Date.now()

  // 设置路由的url
  router.push(context.url)
  const matchedComponents = router.getMatchedComponents()

  // 如果没有url匹配
  if (!matchedComponents.length) {
    return Promise.reject({ code: '404' })
  }

  return Promise.all(matchedComponents.map(component => {
    if (component.preFetch) {
      return component.preFetch(store)
    }
  })).then(() => {
    isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
    context.initialState = store.state
    return app
  })
}
