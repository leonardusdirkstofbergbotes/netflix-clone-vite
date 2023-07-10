export default {
  name: 'MoreInfo',
  components: {
  },

  props: {

  },

  emits: [
    'closed'
  ],

  setup (props, {emit}) {
    const closeCard = () => {
      emit('closed');
    };

    return {
      closeCard
    }
  }
}