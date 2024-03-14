import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { reactive } from 'vue';

const app = createApp(App)

app.use(router)

export const visibility = reactive({
    isVisible: false
});



app.mount('#app')
