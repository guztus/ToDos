<template>
  <div id="app" class="container-fluid">
    <Header />
    <AddToDo @add-todo="addToDo" />
    <ToDos
      :todos="todos"
      @completed-change="completedChange"
      @del-todo="deleteTodo"
    />
  </div>
</template>

<script>
import Header from "./components/layout/header";
import ToDos from "./components/ToDos";
import AddToDo from "./components/AddToDo";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    ToDos,
    AddToDo,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    loadTodos() {
      axios
        .get("/api/get/all")
        .then((response) => {
          console.log(response);
          this.todos = response.data;

          this.todos.forEach((todo) => {
            if (todo.completed == 0) {
              todo.completed = false;
            } else {
              todo.completed = true;
            }
          });
        })
        .catch((error) => console.log(error));
    },
    completedChange(todo) {
      axios
        .post("/api/completed-change", {
          id: todo.id,
          completed: todo.completed,
        })
        .then((response) => {
          console.log(response);
          this.loadTodos();
        })
        .catch((error) => console.log(error));
    },
    deleteTodo(id) {
      axios
        .post("/api/delete", {
          id: id,
        })
        .then((response) => {
          console.log(response);
          this.loadTodos();
        })
        .catch((error) => console.log(error));
    },
    addToDo(todo) {
      axios
        .post("/api/add", {
          title: todo.title,
          description: todo.description,
        })
        .then((response) => {
          console.log(response);
          this.loadTodos();
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.loadTodos();
  },
};
</script>

<style>

</style>
