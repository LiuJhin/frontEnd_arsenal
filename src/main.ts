import { createApp } from 'vue'
import { createPinia} from 'pinia'
import router from "./router/router";
import App from './App.vue'

import './style.css'

const app = createApp(App)

const pinna = createPinia

app.use(pinna)

app.use(router)

app.mount('#app')
