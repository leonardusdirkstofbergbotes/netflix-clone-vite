import { createStore } from 'vuex';
import { profileModule } from "./profile";
import { tmdbModule } from './tmdb';

const store = createStore({
    modules: {
        profile: profileModule,
        tmdb: tmdbModule
    }
});

export default store;
