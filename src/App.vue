<template>
  <div id="app">
    <h3>主页面系统</h3>
    <router-link to="/first">地址管理</router-link>
    <router-link to="/second">用户管理</router-link>
    <router-link to="/Note">留言板</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
