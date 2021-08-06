
<template>
  <div class="layout">
    <Row type="flex">
      <X-MenuLeft :toChildMsg="cardNumber" @input="check" :title="title" />
      {{ title }}

      <button @click="onChange">a</button>

      <X-MenuLeft2 :toChildMsg="cardNumber" />
    </Row>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { EventBus } from "@/components/bus";
@Component({})
export default class Home extends Vue {
  tt() {
    this.title = "22";
  }

  onChange() {
    console.log("home_change");
    EventBus.$emit("aMsg", "Home Msg");
  }

  


  title = "11";

  check(val: string) {
    console.log(val);
    console.log(this.title);
  }

  cardNumber: any = {
    key: "cardNumVal",
    title: "卡号",
    errorMsg: "请输入正确的卡号",
    placeholderMsg: "该交易支持储蓄卡/信用卡",
    cameraIsShow: true,
    ipnutMaxLength: 25,
    regular: /^([1-9]{1})[\d\s]{18,24}$/,
    queryCardNumber: "",
  };
}
</script>
<style scoped>
.ivu-select-dropdown .ivu-dropdown {
  margin: 0px 12px 0px 0px;
}
._dropdownList {
  /*  width: 100%;
    text-align: center; */
}
._iconCls {
  width: 56px;
  text-align: center;
}
</style>

<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100%;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: auto;
  background: #fff;
  border-radius: 4px;
  height: 80%;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-menu-left {
  background: #464c5b;
}
.layout-header {
  height: 60px;
  background: #fff;
}
.layout-logo-left {
  width: 90%;
  height: 60px;
  line-height: 60px;
  font-size: 28px;
  text-align: center;
  /*  background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;*/
}
.layout-ceiling-main a {
  color: #9ba7b5;
}
.layout-hide-text .layout-text {
  display: none;
}
.ivu-col {
  transition: width 0.2s ease-in-out;
}
.ivu-row-flex {
  height: 100%;
}
.userinfo {
  display: inline-block;
  float: right;
}
.userinfo .ivu-dropdown {
  margin-top: 50px;
}
.ivu-dropdown {
  margin-right: 25px;
  margin-top: 22px;
}
.ivu-menu-submenu-title {
  padding: 14px;
}

.head-img {
  width: 100%;
  height: 60px;
  line-height: 60px;
  float: right;
  margin-top: -50px;
}
.head-img img {
  border-radius: 20px;
  margin: 10px 0px 10px 10px;
  width: 40px;
  height: 40px;
  float: right;
}
</style>
