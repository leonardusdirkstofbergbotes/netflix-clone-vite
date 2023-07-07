import { PropType, unref } from 'vue';
import { ref, watch } from 'vue';
import { IMovie } from '../../resources/interfaces/IMovie';
import { getShow } from '../../utils/tmdb';

export default {
  name: 'ShowCard',
  components: {
  },
  props: {
    showDetails: [] as PropType<IMovie>
  },

  setup (props) {
    const active = ref<boolean>(false);
    const expanded = ref<boolean>(false);
    const positionOfPopup = ref<{}>({left : 0, top: 0, transform: 'translateX(-33%) translateY(-33%) scale(0.35)'});
    const cardRef = ref<HTMLElement | null>(null);
    const youtubeKey = ref<string | undefined>(undefined);
    const playTrailer = ref<boolean>(false);

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
      playTrailer.value = false;
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

    const fetchTrailerId = () => {
      getShow(props.showDetails.id).then(response => {
        if (response.ok) {
          response.json().then(data => {
            const videoDetails = data.results.find((video: any) => video.site === 'YouTube' && video.official == true);
            
            if (videoDetails) youtubeKey.value = videoDetails.key;
            else youtubeKey.value = undefined;
          });
        }
        else {
          console.error('searh shows encountered an error');
        }
      });
    }

    watch(active, (isActive) => {
      if (isActive) {
        if (unref(youtubeKey.value) == undefined) fetchTrailerId();
        else playTrailer.value = true;
      }
    });
  
    watch(youtubeKey, (newYoutubeKey: string | undefined) => {
      if (newYoutubeKey != undefined)  {
        if (active.value || expanded.value) playTrailer.value = true;
      }
      else playTrailer.value = false;
    })

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
      youtubeKey,
      playTrailer,
      active,
      expanded,
      positionOfPopup,
      cardRef
    }
  }
}