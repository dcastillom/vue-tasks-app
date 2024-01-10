import './style.css'

import { initializeApp } from 'firebase/app'
import { createApp } from 'vue'

import App from './App.vue'
import { installPlugins } from './plugins/utils.js'

const app = createApp(App)

const firebaseConfig = {
  apiKey: 'AIzaSyDAfISg4lxnG1ugEeVMewJ6hhveHOC1i7Q',
  authDomain: 'vue-tasks-app-692ab.firebaseapp.com',
  projectId: 'vue-tasks-app-692ab',
  storageBucket: 'vue-tasks-app-692ab.appspot.com',
  messagingSenderId: '250682034250',
  appId: '1:250682034250:web:6663afa15dd7c952db3eb3',
}

initializeApp(firebaseConfig)

installPlugins(app)

app.mount('#app')
