// function to create task and store it in a firestore collection

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

// function that can edit task

import { setDoc } from "firebase/firestore";
import { database } from "./firebase";

const editTask = (document, updatedDocument) => {
  setDoc(database, document, updatedDocument);
};

export { editTask };
