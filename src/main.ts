import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './resources/routes';

import ProfileCard from './components/ProfileCard/ProfileCard.vue';
import Button from './components/Button/Button.vue';
import IconButton from './components/IconButton/IconButton.vue';
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import ShowCard from './components/ShowCard/ShowCard.vue';
import MoreInfo from './components/MoreInfo/MoreInfo.vue';
import Carousel from './components/Carousel/Carousel.vue';
import Search from './components/Search/Search.vue';
import SearchResults from './components/SearchResults/SearchResults.vue';
import store from './resources/store/store';

const app = createApp(App);

// register components
app.component('vue-button', Button);
app.component('icon-button', IconButton);
app.component('profile-card', ProfileCard);
app.component('vue-header', Header);
app.component('vue-footer', Footer);
app.component('show-card', ShowCard);
app.component('more-info', MoreInfo);
app.component('carousel', Carousel);
app.component('search', Search);
app.component('search-results', SearchResults);



app.use(router);
app.use(store);
app.mount('#app');
