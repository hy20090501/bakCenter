import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: []
}

const mutations = {

  // RESET_NOTE (state, note) {
  //   state.notes = note
  // },

  RESET_NOTE (state) {
      $.getJSON("dist/note.json",function(result){
        console.log(result);
        state.notes = result.data;
        console.log(state.notes)
      });
  }

}

export default new Vuex.Store({
  state,
  mutations
})
