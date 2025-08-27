<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import TaskForm from "@/components/TaskForm.vue";
import todoService  from "@/services/taskService.js";

const route = useRoute();
const router = useRouter();

const task = ref({
  title: "",
  description: "",
  time: "",
  completed: false
});

const isEdit = ref(false);

onMounted(async () => {
  if (route.params.id) {
    isEdit.value = true;
    const data = await todoService.getTask(route.params.id);
    task.value = { ...data }; 
  }
});

const saveTask = async (form) => {
  if (isEdit.value) {
    await todoService.updateTask(form);
  } else {
    await todoService.addTask(form);
  }
  router.push("/");
};
</script>

<template>
  <div>
    <h2 class="text-center mb-4">{{ isEdit ? "Editar Tarefa" : "Nova Tarefa" }}</h2>
    <TaskForm :modelValue="task" @save="saveTask" />
  </div>
</template>
