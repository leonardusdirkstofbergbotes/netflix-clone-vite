import { defineComponent } from "vue"
import supabase from "../../utils/supabase"

const WhosWatching = defineComponent({
  name: 'WhosWatching',
  components: {

  },

  setup () {
    const selectProfile = async (profileId: number) => {
      await supabase.from('testTable').select();
    }

    return {
      selectProfile
    }
  }
})

export default WhosWatching;