<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" @completed-change="$emit('completed-change', todo)" @del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "ToDos",
  components: {
    TodoItem,
  },
  props: ["todos"],
};
</script>

<style scoped>
</style>