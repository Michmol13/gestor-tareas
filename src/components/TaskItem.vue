<template>
  <li>
    <span :class="{ completed: task.completed }">{{ task.text }}</span>
    <button @click="toggleTask">
      {{ task.completed ? 'Desmarcar' : 'Completar' }}
    </button>
    <button @click="deleteTask">Eliminar</button>
  </li>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    markCompleted() {
      console.log('Evento emitido desde TaskItem:', this.task.id);
      this.$emit('mark-completed', this.task.id);
    },
    deleteTask() {
      this.$emit('delete-task', this.task.id);
    },
  },
};
</script>
