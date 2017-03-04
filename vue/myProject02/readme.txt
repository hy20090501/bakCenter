参考自：
利用webpack和vue实现组件化：
http://mrzhang123.github.io/2016/06/02/webpack-vue-3/
https://segmentfault.com/a/1190000005614864

--> vue1.*版本的package.json文件：package-vue1.json
    升级到vue2.*后,除了dependencies中的版本号，还要配置webpack.config.js中，
    alias: {
		vue : path.join(__dirname,'/node_modules/vue/dist/vue')
	}

--> 有一种webpack配置可以直接刷新浏览器，但是在做单页面应用的时候不太好
	devServer: {
	    historyApiFallback: true,
	    hot: false,
	    inline: true,
	    grogress: true
	  }

--> props
<template>
<div>
<div class="message">{{msg}}</div>
<input type="text" v-model="msg">
<button v-on:click="greet">Greet</button>
<Tips parent-msg="parent msg"></Tips>  -----子组件通过props属性获取parentMsg属性
//<child v-bind:my-message="msg"></child>-------父组件传递给子组件的props绑定到父组件的模型msg，当msg变化时，子组件接受的myMessage属性也相应变化
</div>
</template>
<script>
import Tips from '../components/tips.vue'
export default {
  data () {
	return {
	  msg: 'Hello from vue-loader',
	  parentMsg: 'parent msg'
	}
  },
  methods: {
  	greet: function (event) {
      alert('Hello ' + this.msg + '!')
      alert(event.target.tagName)
    }
  },
  components: {
  	Tips
  }
}
</script>
<style>
.message{
	color:red;
	font-size:36px;
	font-weight:blod;
}
</style>