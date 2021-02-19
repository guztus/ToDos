<template>
  <div class="todo-item" :class="{ 'is-complete': todo.completed }" @click="completedChange">
    <div class="row">
      <div class="col-12">
        <b>{{ todo.title }}</b>
      </div>
    </div>
    <div class="row">
      <div class="col-11">
        <span id="description">Description: </span> {{ todo.description }}
      </div>
      <div class="col-1">
        <b-button id="delete-button" variant="danger" @click="onDelete">x</b-button>
      </div>
    </div>
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
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

#description {
  font-style: italic;
}

#delete-button {
  float: right;
  margin-top: -15px;
  margin-bottom: 10px;
}
</style>