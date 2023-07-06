import { ref, watch } from 'vue';
import { searchTmdb } from '../../utils/tmdb';
export default {
  name: 'Search',
  components: {
  },
  props: {

  },
  emits: [
    'searchEmpty'
  ],

  setup (props, {emit}) {
    const open = ref<Boolean>(false);
    const searchValue = ref<String>("");

    const toggleSearch = () => {
      if (!open.value) open.value = true; // also focus the input
      else if (searchValue.value === "") open.value = false;
    };

    const removeText = () => {
      searchValue.value = "";
    };

    watch(searchValue, (newSearchValue: string) => {
      if (newSearchValue === '') emit('searchEmpty');
      else {
        // Perform search
        searchTmdb(newSearchValue).then(response => {
          if (response.ok) {
            response.json().then(data => {
              // Handle search results
              console.log(data);
            });
          }
          else {
            console.log('not okay');
          }
        });
      }
    })

    return {
      open,
      searchValue,
      toggleSearch,
      removeText
    }
  }
}