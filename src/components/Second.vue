<template>
<div>
  用户管理

  <table border="1">
    <tr>
      <td>ID</td>
      <td>姓名</td>
      <td>年龄</td>
      <td>操作</td>
    </tr>
    <tr v-for="(user,index) in user_list " :key="index">
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td>{{user.age}}</td>

      <td>
        <input type="button" value="详细信息" @click="but(index)">|
        <input type="button" value="删除">
      </td>
    </tr>

  </table>
</div>
</template>

<script>
export default {
  name: "Second",
  data () {
    return {
      user_list: [
        {id:1,name:"小白",age:20,msg:"我是个学生"},
        {id:1,name:"小黑",age:21,msg:"我是个学生"},
        {id:1,name:"小蓝",age:22,msg:"我是个学生"},
        {id:1,name:"小红",age:23,msg:"我是个学生"},
      ]
    }
  },
  methods:{
    but (but) {
      this.$router.push({path:"/user?id=" + this.user_list[but].id})
    }
  }
}
</script>

<style scoped>

</style>
