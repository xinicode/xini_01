<template>
  <div class="content">
    <Form ref="form" :model="model" :rules="ruleInline">
      <FormItem prop="username">
        <Input type="text" v-model="model.username" placeholder="Username">
        </Input>
      </FormItem>

      <FormItem prop="password">
        <Input type="password" v-model="model.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Checkbox-group v-model="model.remember">
          <Checkbox label="true" name="remember">记住密码</Checkbox>
        </Checkbox-group>
      </FormItem>

      <FormItem>
        <Button type="primary" @click="submit()">登录</Button>
        <Button type="primary" @click="formLoginReset()">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>
<style scoped>
.content {
  width: 300px;
  margin: 100px auto;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  ruleInline = {
    username: [{ required: true, message: "请填写用户名", trigger: "blur" }],
    password: [
      { required: true, message: "请填写密码", trigger: "blur" },
      {
        type: "string",
        min: 6,
        message: "密码长度不能小于6位",
        trigger: "blur",
      },
    ],
  };

  model = {
    username: "",
    remember: [],
    password: "",
  };

  submit() {
    sessionStorage.setItem("user", JSON.stringify(this.model.username));
    this.$Message.success("提交成功");
    this.$router.push({ path: "/Main" });
  }
}
</script>
