import Vue from 'vue'
import store from '../vuex/store'
import App from '../components/app.vue'
var mycomp = new Vue({
  store, // inject store to all children
  el: '#myDiv',
  components:{App}
});
