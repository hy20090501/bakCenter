<template>
<div class="child-tips">{{msg}}{{parentMsg}}</div>
</template>
<script>
export default {
  data: function() {
	return {
	  msg: '子组件3'
	}
  },
  props: ['parentMsg'],
  mounted: function() {
  	console.log('ok');
  	var _self = this;
  	setTimeout(function(){
  		//_self.parentMsg = 'parent msg new...'//尽量不要在子组件改变props值
  		_self.msg = 'msg new...'
  	},1000);
  }
}
</script>
<style>
.child-tips{
	color:red;
	font-size:24px;
	font-weight:blod;
}
</style>