import formikPlugin from './formik'
import routerPlugin from './router'
import piniaPlugin from './pinia'

export const installPlugins = (app) => {
  formikPlugin(app)
  routerPlugin(app)
  piniaPlugin(app)
}
