import formikPlugin from './formik'
import routerPlugin from './router'

export const installPlugins = (app) => {
  formikPlugin(app)
  routerPlugin(app)
}
