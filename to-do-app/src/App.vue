<template>
  <div id="app">
    <h1>To-Do App</h1>
    <form @submit='addTodo'>
      <input placeholder="new todo..." v-model='inputText'/>
      <button>Add</button>
    </form>
    <template v-for='(todo, i) in todos'>
      <todo 
        :todo='todo' 
        :index='i'
        :remove='remove'
      ></todo>
    </template>
  </div>
</template>

<script>
import Todo from './Todo.vue';
export default {
  components: {
    todo: Todo
  },
  data: function() {
    return {
      todos: ['yes'],
      inputText: ''
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      if (this.inputText) {
        this.todos.push(this.inputText)
        this.inputText = '';
      } else {
        alert('Please type in a new todo first')
      }
    },
    remove(i) {
      this.todos.splice(i, 1);
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

input {
    width: 250px;
    border: none;
    border-bottom: 1px black solid;
    padding-left: 5px;
    margin: 50px 10px 50px 0px;
}

button {
  border-radius: 5px;
  background-color: white;
  font-size: 15px;
}
</style>
