<template>
<div>
  <table border="1">
    <tr>
      <td>ID</td>
      <td>姓名</td>
      <td>年龄</td>
      <td>个人介绍</td>
    </tr>
    <tr >
      <td v-for="(user,index) in user_list[ind] " :key='index'> {{user}}</td>
    </tr>
  </table>
  <input type="button" value="返回上一页" @click="clic">
</div>
</template>

<script>
export default {
  name: "Userone",
  data() {
    return {
      user_list: [
        {id:1,name:"小白",age:20,msg:"我是学生1"},
        {id:2,name:"小黑",age:21,msg:"我是个学生2"},
        {id:3,name:"小蓝",age:22,msg:"我是个学生3"},
        {id:4,name:"小红",age:23,msg:"我是个学生4"},
      ],
      ind:this.$route.query.id
    }
  },
  methods: {
    clic() {
      this.$router.go(-1);
    }
}}
</script>

<style scoped>

</style>
