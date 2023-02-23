import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia} from 'pinia'
import router from "./router/router";

const app = createApp(App)
const pinna = createPinia

app.use(pinna)

app.use(router)

app.mount('#app')
