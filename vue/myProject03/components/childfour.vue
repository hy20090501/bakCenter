<template>
<div>
  <div class="child-tips">
    {{msg}}
  </div>
  <div class="list-group">
    <a v-for="note in filteredNotes">
      <h4>
        {{note.text}}
      </h4>
    </a>
  </div>
  <button v-on:click="resetNote()">重置</button>
</div>
</template>
<script>
import { resetNote } from '../vuex/actions'

export default {
  data: function() {
    return {
      msg: '子组件4',
      flag: true
    }
  },
  vuex: {
    getters: {
      notes: state => state.notes
    },
    actions: {
      resetNote
    }
  },
  computed: {
    filteredNotes () {
      return this.notes;
    }
  }
}
</script>
<style>
.child-tips{
  color:red;
  font-size:24px;
}
</style>