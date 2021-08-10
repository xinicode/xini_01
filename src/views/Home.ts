
import { Component, Prop, Vue } from "vue-property-decorator";
import { EventBus } from "@/components/bus";



@Component({})
export default class Home extends Vue {
  spanLeft: Number = 5;
  spanRight: Number = 19;

  modeType = "vertical";

  openNames = [this.$route.matched[0].name];

  logoIsDisplay = false;

  curUserName = "1234"

  menuSelect(name) {
    this.$router.push({ path: name });
  }

  toggleClick() {
    if (this.spanLeft === 5) {
      this.spanLeft = 1;
      this.spanRight = 23;
    } else {
      this.spanLeft = 5;
      this.spanRight = 19;
    }
  }



  dropDown(name) {
    this.$router.push({ path: name });
    console.log(name);
  }


  modifyPassWord(){

  }


  logout(){

    this.$router.push('/login');

  }

}