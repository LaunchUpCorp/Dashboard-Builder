import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'


import App from '@/App.vue'
import './assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
