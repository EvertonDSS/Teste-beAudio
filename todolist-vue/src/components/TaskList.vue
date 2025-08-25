<template>
  <div class="task-list">
    <TaskCard
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @edit="onEdit"
      @delete="onDelete"
      @toggle="onToggle"
    />
  </div>
</template>

<script setup>
import TaskCard from './TaskCard.vue';

defineProps({
  tasks: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(["edit", "delete"]);

function onEdit(task) {
  emit("edit", task);
}

function onDelete(id) {
  emit("delete", id);
}
</script>
