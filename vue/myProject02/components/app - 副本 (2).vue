<template>
<div>
<div class="message">{{msg}}</div>
<input type="text" v-model="msg">
<button v-on:click="greet">Greet</button>
<Tips parent-msg="parent msg"></Tips>
<child v-bind:my-message="msg"></child>
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