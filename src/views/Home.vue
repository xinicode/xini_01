
<template>
  <div class="layout">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
        <Menu
          :mode="modeType"
          theme="dark"
          width="auto"
          :active-name="this.$route.path"
          :open-names="openNames"
          @on-select="menuSelect"
          accordion
        >
          <div class="layout-logo-left">
            <!-- <span class="layout-text" v-if="spanLeft >= 5">CMP管理系统</span> -->
          </div>
          <template
            v-for="(item, index) in $router.options.routes"
            v-if="spanLeft >= 5 && !item.hidden"
          >
            <Submenu :name="item.name" v-if="!item.leaf">
              <template slot="title">
                <Icon
                  :type="item.iconCls"
                  :size="spanLeft === 5 ? 14 : 24"
                ></Icon>
                <span class="layout-text">{{ item.name }}</span>
              </template>
              <template
                v-for="(child, childIndex) in item.children"
                v-if="!child.hidden"
              >
                <Menu-item :name="child.path">{{ child.name }}</Menu-item>
              </template>
            </Submenu>
            <template v-if="item.leaf && item.children.length > 0">
              <Menu-item :name="item.children[0].path">
                <Icon
                  :type="item.iconCls"
                  :size="spanLeft === 5 ? 14 : 24"
                ></Icon>
                <span class="layout-text">{{ item.children[0].name }}</span>
              </Menu-item>
            </template>
          </template>
          <template
            v-for="(item, index) in $router.options.routes"
            v-if="spanLeft < 5 && !item.hidden"
          >
            <Dropdown
              placement="right-start"
              class="_dropdownList"
              @on-click="dropDown"
            >
              <Icon
                :type="item.iconCls"
                color="#fff"
                :size="spanLeft === 5 ? 14 : 24"
              ></Icon>
              <DropdownMenu slot="list">
                <DropdownItem v-if="!item.name" :name="item.children[0].path">{{
                  item.children[0].name
                }}</DropdownItem>
                <Dropdown
                  placement="right-start"
                  v-if="item.children && item.name"
                >
                  <DropdownItem>
                    {{ item.name }}
                    <Icon type="ios-arrow-right"></Icon>
                  </DropdownItem>
                  <DropdownMenu slot="list">
                    <DropdownItem
                      v-for="(child, childIndex) in item.children"
                      :key="childIndex"
                      :name="child.path"
                      >{{ child.name }}</DropdownItem
                    >
                  </DropdownMenu>
                </Dropdown>
              </DropdownMenu>
            </Dropdown>
          </template>
        </Menu>
      </Col>
      <Col :span="spanRight" class="layout-content">
        <div class="layout-header">
          <Button type="text" @click="toggleClick">
            <Icon type="md-apps" size="32"></Icon>
          </Button>
          <div class="userinfo">
            <Dropdown placement="bottom-end">
              <span class="head-img">
                {{ curUserName }}
                <img src="../assets/user.jpg" />
              </span>
              <Dropdown-menu slot="list">
                <Dropdown-item @click.native="modifyPassWord()"
                  >修改密码</Dropdown-item
                >
                <Dropdown-item @click.native="logout()" divided
                  >退出</Dropdown-item
                >
              </Dropdown-menu>
            </Dropdown>
          </div>
        </div>
        <!-- <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
            <Breadcrumb-item>{{ $route.name }}</Breadcrumb-item>
          </Breadcrumb>
        </div> -->
        <div class="layout-content-main">
          <router-view />
        </div>
        <footer class="ivu-global-footer i-copyright">
          <div class="ivu-global-footer-copyright">Copyright © 2021</div>
        </footer>
      </Col>
    </Row>
  </div>
</template>
<script lang="ts" src="./Home.ts" />
<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100%;
}
.layout-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
  background: #f5f7f9;
}
.layout-content-main {
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
}
.layout-menu-left {
  background: #515a6e;
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
}
.layout-ceiling-main a {
  color: #9ba7b5;
}
.layout-text {
  color: #fff;
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
.ivu-global-footer {
  margin: 48px 0 24px 0;
  padding: 0 16px;
  text-align: center;
}
.ivu-global-footer-copyright {
  color: #808695;
  font-size: 14px;
}

</style>
