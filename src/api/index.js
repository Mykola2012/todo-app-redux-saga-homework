const todoDB = [
  {
    id: 0,
    task: 'Studying is not about time. It’s about effort.',
    isDone: false,
  },
];

class TodoDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({ ...newTask, id: Date.now(), isDone: false });
    return this.tasks[this.tasks.length - 1];
  }

  getTasks () {
    return [...this.tasks];
  }

  updateTask (id, values) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);
    this.tasks[foundTaskIndex] = {
      ...this.tasks[foundTaskIndex],
      ...values,
    };
    return this.tasks[foundTaskIndex];
  }

  removeTask (id) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);
    this.tasks.splice(foundTaskIndex, 1);
  }
}

const todoTaskDbInstace = new TodoDB(todoDB);

export const createTask = values => todoTaskDbInstace.createTask(values);

export const getTasks = () => todoTaskDbInstace.getTasks();

export const updateTask = (id, values) =>
  todoTaskDbInstace.updateTask(id, values);

export const removeTask = id => todoTaskDbInstace.removeTask(id);
