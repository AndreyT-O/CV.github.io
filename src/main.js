import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import 'virtual:fonts.css'
import './assets/scss/index.scss'

import './plugin/cursor'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
