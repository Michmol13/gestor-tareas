<template>
  <ul>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @mark-completed="markCompleted"
      @delete-task="deleteTask"
    />
  </ul>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  components: { TaskItem },
  props: ['tasks'],
  methods: {
    markCompleted(id) {
      console.log('Evento recibido en TaskList:', id);
      this.$emit('mark-completed', id);
    },
    deleteTask(id) {
      this.$emit('delete-task', id);
    },
  },
};
</script>