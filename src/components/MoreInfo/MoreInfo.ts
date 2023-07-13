import { PropType, ref } from 'vue';
import { IMovie } from '../../resources/interfaces/IMovie';
export default {
  name: 'MoreInfo',
  components: {
  },

  props: {
    cardRef: HTMLElement,
    youtubeKey: String,
    startPlayingAt: Number,
    showDetails: [] as PropType<IMovie>
  },

  emits: [
    'toggled'
  ],

  setup (props, {emit}) {
    const positionOfPopup = ref<{}>({left : 0, top: 0, transform: 'translateX(-33%) translateY(-33%) scale(0.35)'});
    const expanded = ref<boolean>(false);

    const openPopup = () => {
      setPositionOfPopup();
      expanded.value = true;
      emit('toggled', true);
    }
    
    const setPositionOfPopup = () => {
      const PADDING_FROM_TOP = 80;
      const CENTER_OF_SCREEN = window.innerWidth / 2;
      const card = props.cardRef;
      const cardOffset = card.getBoundingClientRect();
      positionOfPopup.value = {
        top: `-${cardOffset.top - PADDING_FROM_TOP}px`,
        left: `${CENTER_OF_SCREEN - cardOffset.left}px`,
        transform: 'translateX(-50%) scale(1)'
      };
    };

    const closeCard = () => {
      positionOfPopup.value = {
        top: 0,
        left: 0,
        transform: 'translateX(-33%) translateY(-33%) scale(0.35)'
      };
      expanded.value = false;
      emit('toggled', false);
    };

    return {
      positionOfPopup,
      expanded,
      closeCard,
      openPopup
    }
  }
}