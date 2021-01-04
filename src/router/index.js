import Vue from 'vue'
import Router from 'vue-router'
import First from "../components/First";
import Second from "../components/Second";
import Note from "../components/Note";
import Userone from "../components/Userone";
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/first",component:First},
    {path:"/second",component:Second},
    {path:"/Note",component:Note},
    {path:"/user",component:Userone},
    {path:"/",redirect:"/first"}
  ]
})
