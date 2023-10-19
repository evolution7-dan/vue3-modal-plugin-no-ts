import './assets/main.css'
import { ModalPlugin } from './plugins/modal'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(ModalPlugin)
app.mount('#app')
