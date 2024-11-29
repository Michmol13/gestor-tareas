<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/all">Ver Todas</router-link> |
      <router-link to="/completed">Completadas</router-link> |
      <router-link to="/incomplete">Pendientes</router-link>
    </nav>

    <!-- Agregar tareas -->
    <AddTask @task-added="addTask" />

    <!-- Mostrar resumen en la vista principal -->
    <div v-if="isHomePage">
      <h2>Bienvenido a tu Gestor de Tareas</h2>
      <h2>Estado Actual de Tareas</h2>
      <p>Total de tareas: {{ tasks.length }}</p>
      <p>Tareas completadas: {{ completedTasks.length }}</p>
      <p>Tareas pendientes: {{ pendingTasks.length }}</p>
    </div>

    <!-- Mostrar tareas con sus botones de completar/desmarcar en otras vistas -->
    <div v-else>
      <h2>Tareas</h2>
      <ul>
        <li v-for="(task, index) in tasks" :key="task.id" class="lista1">
          {{ task.text }} - {{ task.completed ? "Completada" : "Pendiente" }}
          <button @click="toggleTask(index)">
            {{ task.completed ? '❌ Desmarcar' : '✔️ Completar' }}
          </button>
          <button @click="deleteTask(index)">Eliminar</button>
        </li>
      </ul>
    </div>

    <!-- Vista dinámica -->
    <router-view :tasks="tasks" class="Tareas"/>
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue';

export default {
  components: { AddTask },
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
    completedTasks() {
      return this.tasks.filter(task => task.completed);
    },
    pendingTasks() {
      return this.tasks.filter(task => !task.completed);
    }
  },
  created() {
    this.loadTasks();
  },
  methods: {
    addTask(taskText) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      this.tasks.push(newTask);
      this.saveTasks();
    },
    
    // Método para alternar el estado de la tarea
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.saveTasks();
    },
    
    // Método para eliminar tarea
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    },
    
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    
    loadTasks() {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    },
  },
};
</script>

<style>
#app
 {
  background-image: url('@/assets/1.jpg');
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center;
  background-color: rgba(255, 255, 255, 0.4);
  background-blend-mode: soft-light;
  padding: 5px;
  border-radius: 10px;
  font-family: 'Times New Roman', Times, serif;
  align-items: center;
  text-align: center;
}

nav 
{
  margin-bottom: 15px;
}

nav a 
{
  color: rgb(46, 43, 43);
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  color: #d63384; 
}

h2 {
  color: #444;
}

ul {
  list-style-type: none;
  padding: 0;
}

.lista1 {
  background: none;
  margin: 5px 0;
  padding: 10px;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
  color: black;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #ffe3ed;
}

.Tareas{
  list-style-type: none;
  background-color: none;
}
</style>