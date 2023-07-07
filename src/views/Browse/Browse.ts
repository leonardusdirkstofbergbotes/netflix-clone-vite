import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

export default {
  name: 'Browse',
  components: {
  },

  setup () {
    const store = useStore();
    const shows = computed(() => store.getters['getShows']);
    const hasSearchResults = computed(() => store.getters['getSearchedShows'] != undefined);

    onMounted (async () => {
      await store.dispatch('fetchShows');
    });

    return {
      shows,
      hasSearchResults
    };
  }
}