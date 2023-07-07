import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'SearchResults',
  components: {
  },
  setup () {
    const store = useStore();
    const searchedshows = computed(() => store.getters['getSearchedShows']);

    return {
      searchedshows
    }
  }
}