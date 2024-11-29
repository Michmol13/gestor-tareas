<template>
  <div>
    <h1>Todas las Tareas</h1>
    <TaskList 
      :tasks="tasks"
      @toggle-task="toggleTask"
      @delete-task="deleteTask"
    />
  </div>
</template>

<script>
import TaskList from '../components/TaskList.vue';

export default {
  components: { TaskList },
  props: ['tasks'],
  methods: {
    toggleTask(id) {
      this.$emit('toggle-task', id);
    },
    deleteTask(id) {
      this.$emit('delete-task', id);
    },
  },
};
</script>