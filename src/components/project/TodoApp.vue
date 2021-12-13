<template>
  <div class="container">
    <h2 class=" text-center mt-5">My Vue Todo App</h2>

    <!--  Input -->
    <div class="input-group" style="margin: 1rem 0; align-items: center">
      <div class="pull-left" style="margin-right:7px; width:56vw;">
        <input type="text" v-model="taskInput" placeholder="Enter Your Next Task" class="form-control" >
      </div>
      <div class="pull-right">
        <base-button class="btn rounded-0 border-none" @click="submitTask">ADD</base-button>
      </div>
    </div>

    <!--  Task Table -->
    <table class="table table-bordered" style="width:60vw;" >
      <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Status</th>
        <th scope="col" class="text-center">Edit</th>
        <th scope="col" class="text-center">Delete</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="( task , index ) in tasks" :key="index">
        <th>
          <span :class="{'finished': task.status === 'finished'}">{{ task.name }}</span>
        </th>
        <td style="width: 220px">
           <span @click="changeStatus(index)" role="button">
              {{ firstCharUpper(task.status) }}
           </span></td>
        <td>
          <div  class="text-center" @click="editTask(index)" >
            <span  class="fa fa-pen" role="button"></span>
          </div>
        </td>
        <td>
          <div  class="text-center" @click="deleteTask(index)">
            <span  class="fa fa-trash " role="button"></span>
          </div>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";
export default {
  name: "TodoList",

  components: {BaseButton},
  data(){
    return{
      taskInput: "",
      availableStatuses: [ 'to-do', 'in-progress', 'finished'],
      editedTask: null,
      tasks:[
        {
          name: 'Steal time to sleep',
          status: 'to-do',
        },
        {
          name: 'Eat 1 kilo baklava',
          status: 'in-progress',
        },
      ]
    }
  },
  methods:{
    submitTask(){
      if(this.taskInput.length === 0) return;

      if(this.editedTask === null) {
        this.tasks.push({
          name: this.taskInput,
          status: 'to-do',
          createdAt: Date.now(),
        });
      } else {
        this.tasks[this.editedTask].name = this.taskInput;
        this.editedTask = null;
      }
      this.taskInput = '';
    },

    deleteTask(index){
      this.tasks.splice(index,1)
    },
    editTask(index){
      this.taskInput = this.tasks[index].name
      this.editedTask = index

      console.log(this.taskInput)
      console.log(this.editedTask)
    },
    changeStatus(index){
      let statusIndex = this.tasks[index].status
      let newIndex = this.availableStatuses.indexOf(statusIndex )
      if(++newIndex > 2) newIndex = 0
      this.tasks[index].status = this.availableStatuses[newIndex];
    },
    firstCharUpper(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
};
</script>

<style scoped>
.finished {
  text-decoration:line-through;
}
</style>

