<template>
  <!--  Input -->
  <form @submit.prevent="submitTask">
    <div class="input-group" style="margin: 1rem 0; align-items: center">
      <div class="pull-left" style="margin-right: 7px; width: 56vw">
        <input
          type="text"
          v-model="taskInput"
          placeholder="Enter Your Next Task"
          class="form-control"
        />
      </div>
      <div class="pull-right">
        <base-button type="submit" class="btn rounded-0 border-none"
          >ADD</base-button
        >
      </div>
    </div>
  </form>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";
// const baseURL = "https://todo-app-8d5f4-default-rtdb.firebaseio.com/";
import axios from 'axios';

export default {
  name: "TodoForm",
  props: ["name", "nameTask"],
  inject: ["tasks"],
  components: {BaseButton},
  data() {
    return {
      taskInput: "",
      // inputValid: false,
      editedTask: null,
      error: null,
    };
  },
  provide() {
    return {
      // taskInput: this.taskInput,
      // tasks: this.tasks,
    };
  },
  methods: {
    submitTask() {
      if (this.taskInput.length === 0) return;

      if (this.editedTask === null) {
        // this.tasks.push({
        //   name: this.taskInput,
        //   status: "to-do",
        //   createdAt: Date.now(),
        // });
        axios.post('https://todo-app-8d5f4-default-rtdb.firebaseio.com/post.json',
            {
              name: this.taskInput,
              status: "to-do",
              createdAt: Date.now(),
            }
        )
            .then((res) => {
              //Perform Success Action
              if (res.ok) {
                //...
                // return res.json(),
                    console.log(res ,'mission done')

              } else {
                throw new Error('Could not save data!');
              }
            })
            .catch((error) => {
              // error.response.status Check status code
              console.log(error);
              this.error = error.message;
            })
            .finally(() => {
              //Perform action in always
              console.log('finally')
            });

      //  get data

        axios.get('https://todo-app-8d5f4-default-rtdb.firebaseio.com/post.json',
            this.tasks.push({
                  name: this.taskInput,
                  status: "to-do",
                  createdAt: Date.now(),
                })
        )
            .then((response) => {
              const {ok} = response;
              if (ok) {
                let json = response.json();
                return json;
              }
            })
            .then((data) => {
              let newVar = data.json();
              console.log('data');
              return newVar
            })
            .catch((error) => {
              console.log(error);
              this.error = 'Failed to fetch data - please try again later.';
            });
      } else {
        console.log(this.editedTask);
        this.tasks[this.editedTask].name = this.taskInput;
        this.editedTask = null;
      }
      this.taskInput = "";

      this.error = null;
    },

    // deleteTask(index) {
    //   this.tasks.splice(index, 1);
    // },
    // editTask(index) {
    //   // this.edited = this.tasks[index].name;
    //   this.name = this.tasks[index].name;
    //   this.taskInput = this.name;
    //   console.log("hhh");
    //   console.log(this.name, this.taskInput);
    // },

  },
}
</script>

<style scoped></style>
