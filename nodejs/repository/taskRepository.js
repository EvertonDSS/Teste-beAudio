const db = require('../models'); // importa o index.js do Sequelize CLI
const Task = db.Task; 

class TaskRepository {
  async getAll() {
    const tasks = await Task.findAll({
      order: [["id", "ASC"]],
    });
    return tasks;
  }

  async getById(id) {
    return await Task.findOne({ where: { id } });
  }

  async create(task) {

    const newTask = await Task.create(task);
    return newTask;
  }

  async update(task, { title, description, completed }) {
    task.title = title !== undefined ? title : task.title;
    task.description =
      description !== undefined ? description : task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    await task.save();
    return task;
  }

  async delete(id) {
    const task = await this.getById(id);
    if (!task) {
      return null;
    }
    await Task.destroy({ where: { id } });
    return task;
  }
}

module.exports = new TaskRepository();
