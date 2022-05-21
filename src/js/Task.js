const Task = (title, date, priority, description) => {
  return { title, date, priority, description };
}

const storeTask = (task, array) => {
  array.push(task);
}

const deleteTask = (task, array) => {
  const taskIndex = array.indexOf(task);
  array.splice(taskIndex);
}

const editTask = (task, property, value) => {
  task[property] = value;
}

export { Task, storeTask, deleteTask, editTask };