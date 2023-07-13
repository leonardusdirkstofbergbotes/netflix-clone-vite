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
    const youtubeKey = ref<string | undefined>(undefined);
    const playTrailer = ref<boolean>(false);
    const popupActive = ref<boolean>(false);
    const playTimeCount = ref<number>(0);
    const timer = ref<NodeJS.Timer | null>(null);

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
      active.value = false;
      playTrailer.value = false;
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
        if (active.value) playTrailer.value = true;
      }
      else playTrailer.value = false;
    });

    watch(popupActive, (isPopupOpen: boolean) => {
      if (isPopupOpen) active.value = false;
    });

    watch(playTrailer, (isPlayingTrailer: boolean) => {
      if (isPlayingTrailer) {
        timer.value = setInterval(() => {
          playTimeCount.value++;
        }, 1000);
      } else {
        clearInterval(timer.value as NodeJS.Timer);
        playTimeCount.value = 0;
      }
    });

    return {
      hoverHandler,
      mouseLeaveHandler,
      youtubeKey,
      playTrailer,
      playTimeCount,
      active,
      popupActive
    }
  }
}