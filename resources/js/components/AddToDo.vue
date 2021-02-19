<template>
  <div class="content">
    <form @submit="addTodo">
      <div class="row">
        <div class="col-3">
          <input
            class="form-control"
            id="title-text-area"
            maxlength="255"
            type="text"
            v-model="title"
            name="title"
            placeholder="Add a title..."
          />
        </div>
        <div class="col-8">
          <textarea
            class="form-control"
            id="description-text-area"
            maxlength="255"
            type="text"
            v-model="description"
            name="description"
            placeholder="Add a description..."
          >
          </textarea>
        </div>
        <div class="col-1">
          <button
            id="add-button"
            type="submit"
            value="Submit"
            class="btn btn-success"
            :disabled="dontAllowSubmit()"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddToDo",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();

      var todo = {
        title: this.title,
        description: this.description,
      };

      this.$emit("add-todo", todo);

      this.title = "";
      this.description = "";
    },
    dontAllowSubmit() {
      if (this.title.length <= 3 || this.description.length <= 3) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.content {
  margin-bottom: 25px;
}

#title-text-area {
  width: 100%;
  height: 40px;
}

#description-text-area {
  width: 100%;
  resize: none;
  height: 40px;
}

#add-button {
  float: right;
}
</style>