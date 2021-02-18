<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add Todo..." />
      <button type="submit" value="Submit" class="btn">Add</button>
    </form>
  </div>
</template>

<script>
import uuid from "uuid";

export default {
  name: "AddToDo",
  data() {
      return {
          title: ''
      }
  },
  methods: {
      addTodo(e) {
          e.preventDefault();

          var todo = {
              id: uuid.v4(),
              title: this.title,
              completed: false,
          }

          this.$emit('add-todo', todo);

          this.title = '';
      }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
</style>