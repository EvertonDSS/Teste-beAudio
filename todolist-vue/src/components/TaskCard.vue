<template>
  <div class="col">
    <div class="card h-100 shadow-sm" :class="task.completed ? 'border-success border-2' : 'border-warning border-2'">
      <div class="card-header d-flex align-items-center gap-3 bg-transparent border-bottom-0 pt-3">
        <input class="form-check-input" type="checkbox" :id="'task-check-' + task.id" :checked="task.completed"
          @change="$emit('toggle', task)" role="checkbox" :aria-checked="task.completed" :disabled="task.completed" />
        <label class="form-check-label mb-0" :for="'task-check-' + task.id" style="cursor: pointer">
          <span :class="{ 'text-muted': task.completed }">Título:</span>
          <span :class="{ 'text-decoration-line-through text-muted': task.completed }">
            {{ task.title }}
          </span>
        </label>
      </div>

       <div class="card-body py-2">
        <p class="card-text mb-0">
          <strong>Time:</strong>
          <br>
          <span style="white-space: pre-line;">
            {{ task.time }}
          </span>
        </p>
      </div>

      <div class="card-body py-2">
        <p class="card-text mb-0">
          <strong>Descrição:</strong>
          <br>
          <span style="white-space: pre-line;" :class="{ 'text-muted fst-italic': task.completed }">
            {{ task.description }}
          </span>
        </p>
      </div>


      <div class="card-footer d-flex justify-content-between align-items-center bg-transparent border-top pt-2 pb-3">
        <span class="badge d-flex align-items-center gap-1"
          :class="task.completed ? 'text-bg-success' : 'text-bg-warning'">
          <i :class="task.completed ? 'bi bi-check-circle-fill' : 'bi bi-hourglass-split'"></i>
          {{ task.completed ? 'Concluída' : 'Pendente' }}
        </span>
        <div class="d-flex flex-wrap gap-2 mt-2 mt-md-0">
          <button class="btn btn-outline-primary d-flex align-items-center gap-1" @click="$emit('edit', task)"
            type="button"
            :disabled="task.completed">
            <i class="bi bi-pencil-square"></i>
            <span class="d-none d-sm-inline">Editar</span>
          </button>
          <button class="btn btn-outline-danger d-flex align-items-center gap-1" @click="$emit('delete', task.id)"
            type="button">
            <i class="bi bi-trash"></i>
            <span class="d-none d-sm-inline">Excluir</span>
          </button>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
});
defineEmits(["edit", "delete", "toggle"]);
</script>
