<template>
  <div id="app">
    <h3>To-Dos</h3>
    <input type="text" v-model='text'>
    <button @click="add">add</button>
    <div v-for="todo in todos">
      {{todo}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    add() {
      this.$store.dispatch('addTodo', this.text);
    }
  },
  computed: {
    todos() {
      return this.$store.getters.listOfTodos
    }
  },
  created() {
    console.log(this.$store)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
