<template>
<div>
<div class="message">{{msg}}</div>
<input type="text" v-model="msg">
<button v-on:click="greet">Greet</button>
<childone v-bind:parent-msg="msg"></childone>
<childtwo v-bind:parent-msg="parentMsg2"></childtwo>
<childthree parent-msg="parent msg three"></childthree>
<childfour parent-msg="parent msg four"></childfour>
</div>
</template>
<script>
import childone from '../components/childone.vue'
import childtwo from '../components/childtwo.vue'
import childthree from '../components/childthree.vue'
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
  	childone: childone,
  	childtwo: childtwo,
    childthree: childthree,
    childfour: childfour
  }
}
</script>
<style>
.message{
	color:red;
	font-size:36px;
}
</style>