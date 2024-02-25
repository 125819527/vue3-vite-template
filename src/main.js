import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'virtual:uno.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

app.use(router).mount('#app')
