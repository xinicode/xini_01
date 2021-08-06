import { Component, Prop, Vue } from 'vue-property-decorator';
import { EventBus } from '@/components/bus';
@Component
export default class LayoutMenu extends Vue {

  theme2 = 'light';

  @Prop() title: string | undefined


  submit(){
    EventBus.$emit("aMsg", "组件2 Msg");

  }

  mounted() {
    EventBus.$on('aMsg', (msg) => {
      console.log(msg)
      this.theme2 = msg
    })
  }


}