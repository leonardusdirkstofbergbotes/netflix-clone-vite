import { createStore } from 'vuex';
import { profileModule } from "./profile";

const store = createStore({
    modules: {
        profile: profileModule
    }
});

export default store;
