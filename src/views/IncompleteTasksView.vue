<template>
  <div>
    <h1>Tareas Incompletas</h1>
    <TaskList 
      :tasks="tasks.filter(task => !task.completed)"
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