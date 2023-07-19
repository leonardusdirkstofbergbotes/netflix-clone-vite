import { computed, ref, watch } from 'vue';
import { IMovie } from '../../resources/interfaces/IMovie';
import { IShow } from '../../resources/interfaces/IShow';

export default {
  name: 'Carousel',
  components: {
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array as () => (IMovie | IShow[]),
      default: () => []
    },
    itemsToDisplay: {
      type: Number,
      default: 5
    }
  },

  setup (props) {
    const totalPagesAvailable = computed(() => Math.round(props.items.length / props.itemsToDisplay));
    const currentPage = ref<number>(1);   
    const showTotalPages = ref<boolean>(false);
    const showNavigation = ref<boolean>(false);
    const translateX = ref<number>(0);

    const next = () => {
      if (currentPage.value < totalPagesAvailable.value) currentPage.value += 1;
      else currentPage.value = 1;
    }

    const previous = () => {
      if (currentPage.value > 1) currentPage.value -= 1;
      else currentPage.value = totalPagesAvailable.value;
    }

    watch(currentPage, (pageNumber: number) => {
      translateX.value = -(pageNumber - 1) * 100;
    })

    return {
      totalPagesAvailable,
      currentPage,
      showTotalPages,
      showNavigation,
      translateX,
      next, 
      previous
    }
  }
}