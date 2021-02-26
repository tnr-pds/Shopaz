
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countclock1: 0,
    countclock2: 0,
    countclock3: 0,
    countclock4: 0,
    countclock5: 0,
    countclock6: 0,
    summoney:0,
    // todos: [
    //   { id: 1, text: 'A', done: true },
    //   { id: 2, text: 'B', done: false },
    //   { id: 3, text: 'C', done: true }
    // ]
  },
  getters: {
    // // 1. คำนวนสมการ
    // doubleCounter: state => {
    //   return state.counter +=  2 * 3 * 5
    // },
    // // 2. กรองข้อมูลเฉพาะงานที่เสร็จแล้ว done=true
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // },
    // // 3.  นับจำนวนงานที่เสร็จแล้ว (ต่อจากข้อ 2)
    // doneTodosCount: (state, getters) => {
    //   return getters.doneTodos.length
    // },
    // // ค้นหา object งานจากค่า id
    // getTodoById: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id)
    // }
    countclock1:state=> state.countclock1,
    countclock2:state=> state.countclock2,
    countclock3:state=> state.countclock3,
    countclock4:state=> state.countclock4,
    countclock5:state=> state.countclock5,
    countclock6:state=> state.countclock6,
    summoney:state=>state.summoney

  },
  mutations: { 
    increment1: (state) => {
      state.countclock1 += 1
      state.summoney += 590
    },
    increment2: (state) => {
      state.countclock2 += 1
      state.summoney += 400
    },
    increment3: (state) => {
      state.countclock3 += 1
      state.summoney += 390
    },
    increment4: (state) => {
      state.countclock4 += 1
      state.summoney += 259
    },
    increment5: (state) => {
      // state.countclock5 += 1
      state.summoney += 450
    },
    increment6: (state) => {
      state.countclock6 += 1
      state.summoney += 599
    },
    de1: (state) => {
      // state.countclock1 -= 1
      // state.summoney -= 590
      if (state.summoney ==0 && state.countclock1 == 0){
        state.summoney -=0 
        state.countclock1 -= 0
      }
      else{
        state.summoney -=590
        state.countclock1 -= 1
    }
    },
    de2: (state) => {
      if (state.summoney ==0 && state.countclock2 == 0){
        state.summoney -=0 
        state.countclock2 -= 0
      }
      else{
        state.summoney -=400
        state.countclock2 -= 1
      }
    },
    de3: (state) => {
      if (state.summoney ==0 && state.countclock3 == 0){
        state.summoney -=0 
        state.countclock3 -= 0
      }
      else{
        state.summoney -=390
        state.countclock3 -= 1
      }
    },
    de4: (state) => {
      if (state.summoney ==0 && state.countclock4 == 0){
        state.summoney -=0 
        state.countclock4 -= 0
      }
      else{
        state.summoney -=259
        state.countclock4 -= 1
      }
    },
    de5: (state) => {
      if (state.summoney ==0 && state.countclock5 == 0){
        state.summoney -=0 
        state.countclock5 -= 0
      }
      else{
        state.summoney -=450
        state.countclock5 -= 1
      }
    },
    de6: (state) => {
      if (state.summoney ==0 && state.countclock6 == 0){
        state.summoney -=0 
        state.countclock6 -= 0
      }
      else{
        state.summoney -=599
        state.countclock6 -= 1
      }
    },
  },
  actions: {
  },
  modules: {
  }
})