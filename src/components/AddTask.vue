<template>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" placeholder="Nueva tarea" />
      <button type="submit">Agregar</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          this.$emit('task-added', this.newTask);
          this.newTask = ''; // Limpiar el campo después de agregar la tarea
        }
      },
    },
  };
  </script>  