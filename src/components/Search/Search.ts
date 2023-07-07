import { useStore } from 'vuex';
import { ref, watch } from 'vue';
import { searchTmdb } from '../../utils/tmdb';
export default {
  name: 'Search',
  components: {
  },

  setup () {
    const store = useStore();
    const open = ref<Boolean>(false);
    const searchValue = ref<String>("");
    const inputRef = ref<null | HTMLInputElement>(null);

    const toggleSearch = () => {
      if (!open.value) {
        open.value = true;
        const searchBox = inputRef.value as HTMLInputElement;
        searchBox.focus();
      }
      else if (searchValue.value === "") open.value = false;
    };

    const removeText = () => {
      searchValue.value = "";
    };

    watch(searchValue, (newSearchValue: string) => {
      if (newSearchValue === '') store.commit('resetSearchedShows');
      else store.dispatch('searchShows', newSearchValue);
    })

    return {
      open,
      searchValue,
      inputRef,
      toggleSearch,
      removeText
    }
  }
}