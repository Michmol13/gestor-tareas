<template>
  <template>
    <div class="task-container"></div>
</template>
</template>

<script>
export default {
  props: ['tasks'],
  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.completed);
    },
    pendingTasks() {
      return this.tasks.filter(task => !task.completed);
    },
  },
};
</script>
