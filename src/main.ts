import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './resources/routes';

import ProfileCard from './components/ProfileCard/ProfileCard.vue';
import Button from './components/Button/Button.vue';
import store from './resources/store/store';

const app = createApp(App);

// register components
app.component('vue-button', Button);
app.component('profile-card', ProfileCard);


app.use(router);
app.use(store);
app.mount('#app');
