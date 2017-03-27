import Vue from 'vue';
import App from './App.vue';
import rem from "./rem";
import router from "./router"
import VueRouter from "vue-router"
import resource from "vue-resource"
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
rem.count();
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(VueRouter);
Vue.use(resource);
Vue.prototype.goback=function(){
    router.go(-1);
}
new Vue({
  el: '#app',
  router,
  rem,
  render: h => h(App)
})
