import { computed, ref } from 'vue';
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
      default: 7
    }
  },

  setup (props) {
    const totalPagesAvailable = computed(() => props.items.length / props.itemsToDisplay);
    const currentPage = ref<number>(1);   

    const next = () => {
      if (currentPage.value < totalPagesAvailable.value) currentPage.value += 1;
      else currentPage.value = 1;
    }

    const previous = () => {
      if (currentPage.value > 1) currentPage.value -= 1;
      else currentPage.value = totalPagesAvailable.value;
    }

    return {
      totalPagesAvailable,
      currentPage,
      next, 
      previous
    }
  }
}