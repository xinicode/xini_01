
<template>
  <div class="layout" >
    <Row type="flex">
        <X-MenuLeft />
            123123
    </Row>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class Home extends Vue {
  @Prop() private msg!: string;
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
