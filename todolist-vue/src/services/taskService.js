import axios from "axios";
import { showToast } from "@/utils/toast";

const API_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_URL) {
  throw new Error(
    "A variável de ambiente VITE_API_BASE_URL não está definida."
  );
}

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTasks = async () => {
  try {
    const response = await apiClient.get("/tasks");
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getTask = async (id) => {
  try {
    const response = await apiClient.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const addTask = async (task) => {
  try {
    const response = await apiClient.post("/tasks", task);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const updateTask = async (task) => {
  try {
    const response = await apiClient.put(`/tasks/${task.id}`, task);
    return response.data;
  } catch (error) {
    showToast(error.response.data.message, "danger");
    return null;
  }
};

export const deleteTask = async (id) => {
  try {
    await apiClient.delete(`/tasks/${id}`);
  } catch (error) {
    console.error("Erro ao excluir a tarefa:", error);
  }
};

export default {
  getTask,
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};
