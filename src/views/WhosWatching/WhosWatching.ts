import { defineComponent, onMounted, computed, ref } from "vue"
import { useStore } from 'vuex';
import { IProfile } from '../../resources/interfaces/IProfile';
import router from "../../resources/routes";

const WhosWatching = defineComponent({
  name: 'WhosWatching',
  components: {

  },

  setup () {
    const store = useStore();
    const profiles = computed(() => store.getters['getProfilesAvailable']);
    const loading = ref<Boolean>(false);

    const selectProfile = async (profile: IProfile) => {
        store.dispatch('selectProfile', profile);
        router.push({name: 'browse'});
    }

    onMounted(async () => {
      const USER_ID = 1;
      loading.value = true;
      await store.dispatch('fetchProfiles', USER_ID);
      loading.value = false;
    });

    return {
      selectProfile,
      profiles,
      loading
    }
  }
})

export default WhosWatching;