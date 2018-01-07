<template>
  <div>
      <p>{{ todo }}<button @click='remove(index)'>Remove</button></p>
  </div>
</template>

<script>
export default {
//   props: ['todo', 'index', 'remove']
    props: ['todo', 'index'],
    methods: {
        remove() {
            this.index = 100
            this.$emit('removeTodo', this.index);
        }
    }
}
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p {
        font-size: 25px;
    }
    button {
        border-radius: 5px;
        background-color: white;
        margin-left: 10px;
        font-size: 15px;
    }
</style>


