import { PropType } from 'vue';
import { ref, watch } from 'vue';
import { IMovie } from '../../resources/interfaces/IMovie';

export default {
  name: 'ShowCard',
  components: {
  },
  props: {
    showDetails: [] as PropType<IMovie>
  },

  setup () {
    const active = ref<boolean>(false);
    const expanded = ref<boolean>(false);
    const positionOfPopup = ref<{}>({left : 0, top: 0, transform: 'translateX(-33%) translateY(-33%) scale(0.35)'});
    const cardRef = ref<HTMLElement | null>(null);

    const hoverHandler = (event: MouseEvent) => {
      const itemHovered = event.target;
      const HOVER_TIME_BEFORE_ACTIVE = 350;
      
      setTimeout(() => {
        const allItemsBeingHovered = document.querySelectorAll( ":hover" );
        const elementBeingHoveredOnNow = allItemsBeingHovered[allItemsBeingHovered.length - 2];

        active.value = elementBeingHoveredOnNow == itemHovered;
      }, HOVER_TIME_BEFORE_ACTIVE);
    };

    const mouseLeaveHandler = () => {
      if (!expanded.value) active.value = false;
    };

    const toggleCard = (event: MouseEvent) => {
      if (expanded.value) active.value = false;
      
      expanded.value = !expanded.value;
      active.value = false;
    };

    const setPositionOfPopup = () => {
      const PADDING_FROM_TOP = 80;
      const CENTER_OF_SCREEN = window.innerWidth / 2;
      const card = cardRef.value as HTMLElement;
      const cardOffset = card.getBoundingClientRect();
      positionOfPopup.value = {
        top: `-${cardOffset.top - PADDING_FROM_TOP}px`,
        left: `${CENTER_OF_SCREEN - cardOffset.left}px`,
        transform: 'translateX(-50%) scale(1)'
      };
    };

    watch(active, (isActive) => {
      if (isActive) {
        // fetch movie and start playing as soon as its ready
      }
    });

    watch(expanded, (isExpanded) => {
      if (isExpanded) setPositionOfPopup();
      else {
        positionOfPopup.value = {
          top: 0,
          left: 0,
          transform: 'translateX(-33%) translateY(-33%) scale(0.35)'
        };
      }
    })

    return {
      hoverHandler,
      mouseLeaveHandler,
      toggleCard,
      active,
      expanded,
      positionOfPopup,
      cardRef
    }
  }
}