import { ref, watch } from 'vue';

export default {
  name: 'ShowCard',
  components: {
  },

  setup () {
    const active = ref<Boolean>(false);
    const expanded = ref<Boolean>(false);

    const hoverHandler = (event: any) => {
      const itemHovered = event.target;
      const HOVER_TIME_BEFORE_ACTIVE = 350;
      
      setTimeout(() => {
        const allItemsBeingHovered = document.querySelectorAll( ":hover" );
        const elementBeingHoveredOnNow = allItemsBeingHovered[allItemsBeingHovered.length - 2];

        active.value = elementBeingHoveredOnNow == itemHovered;
      }, HOVER_TIME_BEFORE_ACTIVE);
    }

    const mouseLeaveHandler = () => {
      console.log('mouse leave handler');
      if (!expanded.value) active.value = false;
    }

    watch(active, (isActive) => {
      if (isActive) {
        // fetch movie and start playing as soon as its ready
        console.log('now active');
      }
    })

    return {
      hoverHandler,
      mouseLeaveHandler,
      active,
    }
  }
}