import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos: ['code more with Vue']
    },
    getters: {
        listOfTodos(state) {
            return state.todos;
        }
    },
    mutations: {
        addTodo(state, payload) {
            console.log('store', payload)
            state.todos.push(payload)
        }
    },
    actions: {
        addTodo(context, payload) {
            console.log('action', payload)
            context.commit('addTodo', payload)
        }
    }
})