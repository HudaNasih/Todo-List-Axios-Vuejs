<template>
  <div class="container">
    <h2 class="text-center mt-5">My Vue Todo App</h2>

    <!--  Input -->
    <!-- <todo-form :edited="taskInput"></todo-form> -->
    <todo-form></todo-form>

    <!--  Task Table -->
    <!-- <todo-table
      :firstProp="this.taskInput"
      @handleInput="editTask"
    ></todo-table> -->
    <todo-table></todo-table>
    <!--    <router-link to="/TodoList"></router-link>-->
    <!--    <router-view></router-view>-->
  </div>
</template>

<script>
import TodoForm from "@/components/project/TodoForm";
import TodoTable from "@/components/project/TodoTable";

export default {
  name: "TodoList",
  components: { TodoTable, TodoForm },
  inject: ["tasks"],
  // emits: ["handleInput"],
  data() {
    return {
      taskInput: "",
      editedTask: null,
      // tasks:[
      //   {
      //     name: 'Steal time to sleep',
      //     status: 'to-do',
      //   },
      //   {
      //     name: 'Eat 1 kilo baklava',
      //     status: 'in-progress',
      //   },
      // ]
    };
  },
  provide() {
    return {
      // taskInput: this.taskInput,
      // addTask: this.submitTask,
      // update: this.editTask,
      // remove: this.deleteTask,
      // tasks: this.tasks,
    };
  },
  methods: {
    // submitTask() {
    //   if (this.taskInput.length === 0) return;
    //   if (this.editedTask === null) {
    //     this.tasks.push({
    //       name: this.taskInput,
    //       status: "to-do",
    //       createdAt: Date.now(),
    //     });
    //   } else {
    //     this.tasks[this.editedTask].name = this.taskInput;
    //     this.editedTask = null;
    //   }
    //   this.taskInput = "";
    // },
    // deleteTask(index) {
    //   this.tasks.splice(index, 1);
    // },
    // editTask(index) {
    //   // this.edited = this.tasks[index].name;
    //   // console.log("ddd", this.$emit("handleInput", this.taskInput));
    //   this.name = this.tasks[index].name;
    //   this.taskInput = this.name;
    //   console.log("hhh");
    //   console.log(this.name, this.taskInput);
    // },
  },
};
</script>

<style scoped></style>
