<template>
<div>
<div class="message">{{msg}}</div>
<input type="text" v-model="msg">
<button v-on:click="greet">Greet</button>
<childfour></childfour>
</div>
</template>
<script>
import childfour from '../components/childfour.vue'
export default {
  data () {
  	return {
  	  msg: 'Hello from vue-loader',
  	  parentMsg1: 'parent msg one',
      parentMsg2: 'parent msg two'
  	}
  },
  methods: {
  	greet: function (event) {
      alert('Hello ' + this.msg + '!')
      alert(event.target.tagName)
    }
  },
  components: {
    childfour: childfour
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