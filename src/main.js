import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import i18n from './i18n/vue-i18n.js'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'


let app = createApp(App)
app.use(i18n)
app.use(Toast)
app.mount('#app')