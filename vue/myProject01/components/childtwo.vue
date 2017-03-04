<template>
<div class="child-tips">{{msg}}{{parentMsg}}</div>
</template>
<script>
export default {
  data: function() {
	return {
	  msg: '子组件2: '
	}
  },
  ready: function() {
  	console.log('子组件2 ok');
  },
  props: ['parentMsg'],
}
</script>
<style>
.child-tips{
	color:red;
	font-size:24px;
	font-weight:blod;
}
</style>