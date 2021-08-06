import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { EventBus } from "@/components/bus";


@Component
export default class LayoutMenu extends Vue {

  msg = "123123"

  mounted() {
    EventBus.$on('aMsg',(msg)=>{
      console.log(msg)
      this.msg = msg
    })
  }


  @Prop({ type: String })
  title !: string;

  @Prop({ type: Object, required: false })
  toChildMsg!: object;


  @Emit('foucus') focusFn(val:any) { }
  @Emit('input') onInput(val?: any) {} 


  input(){
    this.onInput("isTrue");//传值
  }


  foucus() {
    this.focusFn(123)
  }

}