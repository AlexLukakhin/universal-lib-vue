import { createApp } from 'vue';
import App from './App.vue';
// import './assets/styles/main.css';

import { createVueCounterPlugin } from './';

const VueCounterPlugin = createVueCounterPlugin({ theme: 'light' })

createApp(App).use(VueCounterPlugin).mount('#app');