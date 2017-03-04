<template>
<div>
  <div class="child-tips">
    {{msg}}{{parentMsg}}
    <div>
      <a v-for="note in filteredNotes"
        <h4>
          {{note.text.trim()}}
        </h4>
      </a>
    </div>
  </div>
  <button @click="resetNote()">重置</button>
</div>
</template>
<script>
import { resetNote } from '../vuex/actions'

export default {
  data: function() {
  	return {
  	  msg: '子组件4: ',
      flag: true
  	}
  },
  props: ['parentMsg'],
  ready: function() {
  	console.log('子组件4 ok');
  	var _self = this;
  	setTimeout(function(){
  		//_self.parentMsg = 'parent msg new...'//尽量不要在子组件改变props值
  		_self.msg = '子组件4+:'
  	},1000);
  },
  vuex: {
    state: {
      notes: state => state.notes
      // notes: state => {
      //   console.log('state.notes length:' + state.notes.length);
      //   return state.notes
      // }
    },
    actions: {
      resetNote
    }
  },
  computed: {
    filteredNotes () {
      if (this.flag){
        console.log("notes length: " + this.notes.length)
        return this.notes
      } else {
        return null
      }
    }
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