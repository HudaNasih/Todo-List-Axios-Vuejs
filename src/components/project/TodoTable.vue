<template>
  <table class="table table-bordered" style="width: 60vw">
    <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Status</th>
        <th scope="col" class="text-center">Edit</th>
        <th scope="col" class="text-center">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, index) in tasks" :key="index">
        <th>
          <span :class="{ finished: task.status === 'finished' }">{{
            task.name
          }}</span>
        </th>
        <td style="width: 220px">
          <span
            @click="changeStatus(index)"
            role="button"
            :class="{
              'text-danger': task.status === 'to-do',
              'text-warning': task.status === 'in-progress',
            }"
          >
            {{ firstCharUpper(task.status) }}
          </span>
        </td>
        <td>
          <div class="text-center" @click="editTask(index)">
            <span class="fa fa-pen" role="button"></span>
          </div>
        </td>
        <td>
          <div class="text-center" @click="deleteTask(index)">
            <span class="fa fa-trash" role="button"></span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TodoTable",
  props: ["name", "status"],
  inject: ["tasks"],
  data() {
    return {
      taskInput: "",
      editedTask: null,
      availableStatuses: ["to-do", "in-progress", "finished"],
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      // this.edited = this.tasks[index].name;
      // console.log("ddd", this.$emit("handleInput", this.taskInput));
      this.editedTask = this.tasks[index].name;

      console.log("Selected Task Name");
      console.log(this.editedTask);
    },
    changeStatus(index) {
      let statusIndex = this.tasks[index].status;
      let newIndex = this.availableStatuses.indexOf(statusIndex);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.availableStatuses[newIndex];
    },
    firstCharUpper(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style scoped>
.finished {
  text-decoration: line-through;
}
</style>
