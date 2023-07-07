import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';

export default {
  name: 'Browse',
  components: {
  },

  setup () {
    const store = useStore();
    const shows = computed(() => store.getters['getShows']);
    const hasSearchResults = computed(() => store.getters['getSearchedShows'] != undefined);
    const playSound = ref<Boolean>(false);
    const iframeRef = ref<null | HTMLIFrameElement>(null);

    onMounted (async () => {
      const heroVideo = iframeRef.value as HTMLIFrameElement;
      await store.dispatch('fetchShows');
    });

    return {
      shows,
      hasSearchResults,
      playSound,
      iframeRef
    };
  }
}