<template>
  <div>
    <h1>Tareas Completadas</h1>
    <TaskList
      :tasks="completedTasks"
      @mark-completed="markCompleted"
      @delete-task="deleteTask"
    />
  </div>
</template>

<script>
import TaskList from '../components/TaskList.vue';

export default {
  components: { TaskList },
  props: ['tasks'],
  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.completed);
    },
  },
  methods: {
    markCompleted(id) {
      this.$emit('mark-completed', id);
    },
    deleteTask(id) {
      this.$emit('delete-task', id);
    },
  },
};
</script>