const TaskService = require("../service/taskService");
const {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} = require("../errors/errors");

class TaskController {
  async getAllTasks(req, res) {
    try {
      const tasks = await TaskService.getAllTasks();
      res.json(tasks);
    } catch (error) {
      throw new InternalServerError();
    }
  }

  async getTaskById(req, res) {
    const { id } = req.params;
    if (isNaN(id)) {
      throw new BadRequestError("ID não é um número");
    }
    try {
      const task = await TaskService.getTaskById(Number(id));
      if (!task) {
        throw new NotFoundError("Tarefa não encontrada");
      }
      res.json(task);
    } catch (error) {
      throw new InternalServerError();
    }
  }

  async createTask(req, res) {
    try {
      const newTask = await TaskService.createTask(req.body);
      res.status(201).json(newTask);
    } catch (error) {
      console.log(error);
      
      throw new InternalServerError();
    }
  }

  async updateTask(req, res) {
    const { id } = req.params;
    const updates = req.body;
    try {
      const updatedTask = await TaskService.updateTask(id, updates);
      if (!updatedTask) {
        throw new NotFoundError("Tarefa não encontrada");
      }
      res.json(updatedTask);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
    throw new InternalServerError();
  }

  async deleteTask(req, res) {
    const { id } = req.params;
    const deletedTask = await TaskService.deleteTask(parseInt(id));
    if (deletedTask) {
      res.json(deletedTask);
    } else {
      throw new NotFoundError("Tarefa não encontrada");
    }
  }
}

module.exports = new TaskController();
