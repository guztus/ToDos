<template>
  <div class="todo-item" :class="{ 'is-complete': todo.completed }">
    <p>
      <input type="checkbox" :checked="todo.completed" @change="completedChange" />
      {{ todo.title }}
      <button class="del" @click="onDelete">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    completedChange() {
      this.todo.completed = !this.todo.completed;
      this.$emit("completed-change", this.todo);
    },
    onDelete() {
      this.$emit("del-todo", this.todo.id);
    },
  },
};
</script>

<style scoped>
.todo-item {
  background: white;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: red;
  color: white;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>