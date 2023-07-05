import { PropType, computed, ref } from 'vue';
import { IMovie } from '../../resources/interfaces/IMovie';

export default {
  name: 'Carousel',
  components: {
  },
  props: {
    name: String,
    items: {
      type: [] as PropType<IMovie[]>,
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

    const itemsToDisplay = computed(() => {
      const startIndex = (currentPage.value - 1) * props.itemsToDisplay;
      const endIndex = startIndex + props.itemsToDisplay;
      return props.items.slice(startIndex, endIndex);
    });

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
      itemsToDisplay,
      next, 
      previous
    }
  }
}