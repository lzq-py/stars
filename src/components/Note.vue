<template>
<div>
  <input type="text" v-model="msg">
  <input type="button" value="提交" @click="addnote">
  <a href=""></a>
  <ul>
    <li v-for="(user,index) in notebook" :key="index">
      <span>{{user}}</span>
      <a href="javascript:;" @click="delnot(index)">删除</a>
    </li>
  </ul>
  <span v-show="this.notebook.length!=0">总数量：{{notebook.length}} </span>
  <input type="button" value="清空留言板" @click="delall" v-show="this.notebook.length!=0">
</div>
</template>

<script>
export default {
  name: "Note",
  data (){
    return {
      msg:"",
      notebook: localStorage.notebook ? JSON.parse(localStorage.notebook) : [],
    }
  },
  methods:{
    addnote () {
      let ms = this.msg
      if (ms){
        this.notebook.push(this.msg);
        localStorage.notebook = JSON.stringify(this.notebook);
        this.msg="";
      }

    },
    delnot (not) {
      this.notebook = JSON.parse(localStorage.notebook);
      this.notebook.splice(not,1);
      localStorage.notebook = JSON.stringify(this.notebook);
    },
    delall (){
      this.notebook = [];
    }
  }
}
</script>

<style scoped>

</style>
