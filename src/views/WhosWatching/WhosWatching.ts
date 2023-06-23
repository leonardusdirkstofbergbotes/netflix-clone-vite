import { defineComponent } from "vue"

const WhosWatching = defineComponent({
  name: 'WhosWatching',
  components: {

  },

  setup () {
    const selectProfile = (profileId: number) => {
      alert(`Profile selected: ${profileId}`);
    }

    return {
      selectProfile
    }
  }
})

export default WhosWatching;