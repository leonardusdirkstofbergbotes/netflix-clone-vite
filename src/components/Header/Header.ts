import { onMounted, ref } from "vue"

export default {
  name: 'Header',
  components: {
  },
  
  setup () {
    const transparentNavbar = ref<boolean>(true);

    const handleScroll = (event: any) => {
      const scrollFromTop = event.target.documentElement.scrollTop;
      transparentNavbar.value = (scrollFromTop == 0);
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    })

    return {
      transparentNavbar
    }
  }
}