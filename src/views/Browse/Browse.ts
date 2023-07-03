import { useStore } from 'vuex';
import { IMovie } from './../../resources/interfaces/IMovie';
import { computed, onMounted } from 'vue';

export default {
  name: 'Browse',
  components: {
  },

  setup () {
    const store = useStore();
    const shows = computed(() => store.getters['getShows']);

    onMounted (async () => {
      await store.dispatch('fetchShows');
    });

    return {
      shows
    };
  }
}