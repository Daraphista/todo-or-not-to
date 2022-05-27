import { addDoc } from "firebase/firestore";

const createTask = (collection, title, description, priority, date) => {
  const newTask = {
    title,
    description,
    priority,
    date,
    isFinished: false,
  };
  addDoc(collection, newTask);
};

export { createTask };
