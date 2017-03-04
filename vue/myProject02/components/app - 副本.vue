<template>
<div>
<div class="message">{{msg}}</div>
<Tips></Tips>
</div>
</template>
<script>
import Tips from '../components/tips.vue'
export default {
  data () {
	return {
	  msg: 'Hello from vue-loader'
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