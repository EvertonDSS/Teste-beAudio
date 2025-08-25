const taskRepository = require("../repository/taskRepository");

class TaskService {
  async getAllTasks() {
    return await taskRepository.getAll();
  }

  async getTaskById(id) {
    const task = await taskRepository.getById(id);
    return task;
  }

  async createTask(task) {
    return await taskRepository.create(task);
  }

  async updateTask(id, updates) {
    const task = await taskRepository.getById(id);
    if (!task) {
      return null;
    }
    if (task.completed) {
      throw new Error("Tarefa já está concluída e não pode ser editada.");
    }
    return await taskRepository.update(task, updates);
  }

  async deleteTask(id) {
    return await taskRepository.delete(id);
  }
}

module.exports = new TaskService();
