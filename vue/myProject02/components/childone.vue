<template>
<div class="tips">{{msg}}<span class="inner-span">{{parentMsg}}</span></div>
</template>
<script>
export default {
  data: function() {
	return {
	  msg: '子组件1'
	}
  },
  props: ['parentMsg'],
}
</script>
<style lang="less">
.tips{
	color:blue;
	font-size:24px;
	.inner-span {
		color: red;
		font-size: 20px;
		font-weight:bold;
	}
}
</style>