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
import { mapActions } from 'vuex'
import { resetNote } from '../vuex/actions'

export default {
  data: function() {
    return {
      msg: '子组件4',
      flag: true
    }
  },
  methods: {
    mapActions({resetNote: 'RESET_NOTE'})
  },
  vuex: {
    getters: {
      notes: state => state.notes
    },
    // state: {
    //   notes: state => state.notes
    // },
    // actions: {
    //   resetNote
    // }
    // methods: {
    //   resetNote: function() {
    //     this.$store.dispatch('RESET_NOTE');
    //   }
    // }
  },
  computed: {
    filteredNotes () {
      // if (this.flag){
      //   console.log("notes length: " + this.notes.length)
      //   return this.notes
      // } else {
      //   return null
      // }
      // console.log('in computed...' + this.store.state);
      // console.log('in computed...' + store.state);
      // console.log('in computed...' + this.notes);
      console.log('in computed...' + this.$store.state.notes.length);
      // return this.notes;
      return this.$store.state.notes
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