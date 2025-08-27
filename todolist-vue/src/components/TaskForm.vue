<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <form @submit.prevent="onSubmit" class="p-3 my-4 border rounded shadow-sm bg-light">
          <div class="mb-3">
            <label for="title" class="form-label">Título da tarefa</label>
            <input
              id="title"
              v-model="form.title"
              type="text"
              class="form-control"
              placeholder="Digite o título"
              required
            />
          </div>

          <div class="mb-3">
            <label for="time" class="form-label">Time</label>
            <input
              id="time"
              v-model="form.time"
              type="text"
              class="form-control"
              placeholder="Digite o time"
              required
            />
          </div>

          
          <div class="mb-3">
            <label for="description" class="form-label">Descrição</label>
            <textarea
              id="description"
              v-model="form.description"
              class="form-control"
              placeholder="Digite a descrição"
              rows="3"
            ></textarea>
          </div>

          
          <button type="submit" class="btn btn-success">
            {{ form.id ? "Atualizar" : "Adicionar" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: Object
});

const emit = defineEmits(["save"]);

const form = ref({
  title: "",
  description: "",
  time: "",
  completed: false
});

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) form.value = { ...newVal };
  },
  { immediate: true }
);

const onSubmit = () => {
  emit("save", form.value);
};
</script>
