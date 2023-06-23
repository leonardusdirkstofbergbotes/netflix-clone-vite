import { ButtonType } from "../../resources/enums/ButtonType";
import { PropType } from "vue";

export default {
  name: 'Button',
  components: {
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String as PropType<ButtonType>,
      default: ButtonType.PRIMARY
    }
  }
}