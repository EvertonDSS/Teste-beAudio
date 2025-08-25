<template>
  <div class="container my-4">
    <h1 class="text-center mb-4">Minhas Tarefas</h1>
  <div class="mb-4">
  <router-link 
    to="/tasks/add"
    class="card p-3 d-flex align-items-center justify-content-center text-decoration-none shadow-sm rounded-3 border-0"
    active-class="fw-bold text-success border-success"
  >
    <i class="bi bi-plus-circle me-2 fs-5"></i>
    <span class="fs-6">Nova Tarefa</span>
  </router-link>
</div>

    <div class="row g-3">
      <div class="col-12 col-sm-6 col-md-4" v-for="task in tasks" :key="task.id">
        <TaskCard :task="task" @edit="editTask" @delete="deleteTask" @toggle="toggleTaskCompletion" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TaskCard from '@/components/TaskCard.vue'
import { useRouter } from "vue-router";
import todoService from '@/services/taskService'

const tasks = ref([])
const router = useRouter();

onMounted(async () => {
  tasks.value = await todoService.getTasks()
})

const editTask = (task) => {
  router.push(`/tasks/edit/${task.id}`);
}

const deleteTask = async (id) => {
  await todoService.deleteTask(id)
  tasks.value = tasks.value.filter(t => t.id !== id)
}

const toggleTaskCompletion = async (task) => {
  task.completed = !task.completed
  await todoService.updateTask(task)
}
</script>
