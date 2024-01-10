import './style.css'

import { createApp } from 'vue'

import App from './App.vue'
import { installPlugins } from './plugins/utils.js'

const app = createApp(App)

installPlugins(app)

app.mount('#app')
