import 'amfe-flexible'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.

import '@/assets/css/my-cube.less';
import '@/assets/css/style.less';
import global from '@/lib/global';
import customUI from '@/lib/custom-cube';
import instance from '@/network/index.js';

Vue.prototype.global = global;
import {
  Style,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  TabBar,
  TabPanels,
  // form
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  ImagePreview,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Sticky,
  ScrollNav,
  ScrollNavBar
} from 'cube-ui'

import { Carousel , CarouselItem} from 'element-ui'
import App from './App'
import router from './router'

Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.use(Button)
Vue.use(Loading)
Vue.use(Tip)
Vue.use(Toolbar)
Vue.use(TabBar)
Vue.use(TabPanels)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Input)
Vue.use(Textarea)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Rate)
Vue.use(Validator)
Vue.use(Upload)
Vue.use(Form)
Vue.use(Popup)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(CascadePicker)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(SegmentPicker)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Drawer)
Vue.use(ImagePreview)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)
Vue.use(Swipe)
Vue.use(Sticky)
Vue.use(ScrollNav)
Vue.use(ScrollNavBar)

Vue.config.productionTip = false
//let init = 0
//window.addEventListener('popstate', function(e) {
//init++
//if (init < 2) {
//  router.beforeEach((to, from, next) => {
//    let arr1 = to.path.split('/')
//    let arr2 = from.path.split('/')
//    if (arr1.length === 2) {
//      if (arr1[1].length === 0) {
//        arr1.splice(1, 1)
//      }
//    }
//    if (arr2.length === 2) {
//      if (arr2[1].length === 0) {
//        arr2.splice(1, 1)
//      }
//    }
//    if (arr1.length < arr2.length) {
//      router.togoback()
//    } else {
//      router.togoin()
//    }
//    next()
//  })
//}
//}, false)

router.beforeEach((to, from, next) => {
    if(to.path.indexOf('login') > 0) {
        next(true);
    }else{
        instance.instance.defaults.headers['Authentication'] = global.session.get('authentication');
        let isLogin = sessionStorage.getItem('login');
        if(isLogin) {
            next(true);
        }else{
            next('/login');
        }
    }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
