<template>
  <router-view/>
  <!-- <el-button @click="clink">请求接口</el-button> -->
</template>

<script setup lang="ts">
import { getData } from './api';

function clink() {
  getData.then(res => {
    console.log(res);
  })
}
</script>
