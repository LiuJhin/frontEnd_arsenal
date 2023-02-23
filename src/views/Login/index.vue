<!--
 * @Author: J_in
 * @Date: 2023-02-23 17:06:48
 * @LastEditors: J_in
 * @LastEditTime: 2023-02-23 17:29:37
 * @FilePath: /frontend-arsenal/src/views/Login/index.vue
-->
<template>
  <div class="login">
    <div class="content">
        <div class="header">
            <!-- <p class="header_title">Create an Account</p> -->
            <h1>登入账号</h1>
            <el-form>
                <el-form-item label="账号">
                  <el-input placeholder="请输入账号" v-model="loginForm.id"/>
                </el-form-item>      
                <el-form-item label="密码">
                  <el-input placeholder="请输入密码" type="password" v-model="loginForm.password"/>
                </el-form-item>    
                <el-form-item>
                  <el-button style="width: 100%;" type="primary" @click="submit">登陆</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button style="width: 100%;">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { login } from '@/api';
import {ref} from 'vue'

const loginForm = ref({
  id: null,
  password: null, 
})

function submit() {
  login(loginForm.value).then(res => {
      console.log(res);
  })
  
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  .content {
    display: flex;
    justify-content: center;
    width: 540px;
    height: 300px;
    background: #FFFFFF;
    border: 1px solid #000000;

    .header {
      width: 294px;
      height: 44px;
      .header_title {
        font-size: 32px;
        font-family:'Inter Bold';
      }
    }
  }
}
</style>