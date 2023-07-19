import { PropType, ref, watch } from 'vue';
import { IMovie } from '../../resources/interfaces/IMovie';
import { IShow } from '../../resources/interfaces/IShow';
export default {
  name: 'MoreInfo',
  components: {
  },

  props: {
    cardRef: HTMLElement,
    youtubeKey: String,
    timePlayedAlready: Number,
    showDetails: {
      type: Object as () => (IMovie | IShow),
      default: () => ({})
    }
  },

  emits: [
    'toggled'
  ],

  setup (props, {emit}) {
    const positionOfPopup = ref<{}>({left : 0, top: 0, transform: 'translateX(-33%) translateY(-33%) scale(0.35)'});
    const expanded = ref<boolean>(false);
    const startPlayingVideoFrom = ref<number>(0);

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

    watch(expanded, (isExpanded: boolean) => {
      if (isExpanded) startPlayingVideoFrom.value = props.timePlayedAlready;
    })

    return {
      positionOfPopup,
      expanded,
      startPlayingVideoFrom,
      closeCard,
      openPopup
    }
  }
}