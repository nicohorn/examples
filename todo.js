class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
  markAsCompleted() {
    this.completed = true;
  }
}
class TaskList {
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  getTasks() {
    return this.tasks;
  }
}
class TaskManager {
  constructor() {
    this.taskList = new TaskList();
  }
  createTask(title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority);
    this.taskList.addTask(task);
  }
  deleteTask(task) {
    this.taskList.removeTask(task);
  }
  getTaskList() {
    return this.taskList.getTasks();
  }
}
const taskManager = new TaskManager();
taskManager.createTask(
  "Comprar leche",
  "Ir al supermercado y comprar leche",
  "2023-06-01",
  "alta"
);
taskManager.createTask(
  "Llamar al dentista",
  "Hacer una cita para la limpieza dental",
  "2023-06-15",
  "media"
);
const tasks = taskManager.getTaskList();
console.log(tasks);
