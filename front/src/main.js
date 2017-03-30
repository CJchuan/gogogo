import Vue from 'vue';
import App from './App.vue';
import rem from "./rem";
import router from "./router"
import VueRouter from "vue-router"
import resource from "vue-resource"
import { Swipe, SwipeItem } from 'vue-swipe';
import * as moment from 'moment';
import 'moment/locale/pt-br';
require('vue-swipe/dist/vue-swipe.css');
import URL from "./url";
rem.count();
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);
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
  URL,
  render: h => h(App)
})
