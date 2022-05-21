const Task = (title, date, priority, description, id) => {
  return { title, date, priority, description, id };
}

const storeTask = (task, array) => {
  array.push(task);
}

const deleteTask = (task) => {
  
}

const editTask = (property, value) => {
  
}

export { Task, storeTask, deleteTask, editTask };