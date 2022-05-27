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

const editTask = (document, updatedDocument) => {
  setDoc(document, updatedDocument, { merge: true });
};

export { editTask };

// function that can delete task

import { deleteDoc } from "firebase/firestore";

const deleteTask = (document) => {
  deleteDoc(document);
};

export { deleteTask };
