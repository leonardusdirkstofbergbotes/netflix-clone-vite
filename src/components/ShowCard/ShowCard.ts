import { ref, watch } from 'vue';

export default {
  name: 'ShowCard',
  components: {
  },

  setup () {
    const active = ref<Boolean>(false);

    const hoverHandler = (event: any) => {
      const itemHovered = event.target;
      const HOVER_TIME_BEFORE_ACTIVE = 350;
      
      setTimeout(() => {
        const allItemsBeingHovered = document.querySelectorAll( ":hover" );
        const elementBeingHoveredOnNow = allItemsBeingHovered[allItemsBeingHovered.length - 2];

        active.value = elementBeingHoveredOnNow == itemHovered;
      }, HOVER_TIME_BEFORE_ACTIVE);
    }

    watch(active, (isActive) => {
      if (isActive) {
        console.log('now active');
      }
    })

    return {
      hoverHandler,
      active
    }
  }
}