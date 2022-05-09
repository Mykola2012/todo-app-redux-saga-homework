const todoDB = [
  {
    id: 0,
    task: '',
    isDone: false,
  },
];

class TodoDB {
  constructor (arr) {
    this.todoTask = [...arr];
  }

  createTodoTask (newTodoTask) {
    this.todoTask.push({ ...newTodoTask, id: Date.now(), isDone: false });
    return this.todoTask[this.todoTask.length - 1];
  }

  getTodoTask () {
    return [...this.todoTask];
  }

  updateTodoTask (id, values) {
    const foundTodoTaskIndex = this.todoTask.findIndex(c => c.id === id);
    this.todoTask[foundTodoTaskIndex] = {
      ...this.todoTask[foundTodoTaskIndex],
      ...values,
    };
    return this.todoTask[foundTodoTaskIndex];
  }

  deleteTodoTask (id) {
    const foundTodoTaskIndex = this.todoTask.findIndex(c => c.id === id);
    this.todoTask.splice(foundTodoTaskIndex, 1);
  }
}

const todoTaskDbInstace = new TodoDB(todoDB);

export const createTodoTask = values =>
  todoTaskDbInstace.createTodoTask(values);

export const getTodoTask = () => todoTaskDbInstace.getTodoTask();

export const updateTodoTask = (id, values) =>
  todoTaskDbInstace.updateTodoTask(id, values);

export const deleteTodoTask = id => todoTaskDbInstace.deleteTodoTask(id);
