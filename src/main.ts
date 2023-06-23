import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './resources/routes';

import ProfileCard from './components/ProfileCard/ProfileCard.vue';

const app = createApp(App);

// register components
app.component('profile-card', ProfileCard);

app.use(router);
app.mount('#app');
