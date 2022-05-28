// function to create task and store it in a firestore collection

import { addDoc, collection, getDoc } from "firebase/firestore";

const createTask = (
  collectionReference,
  title,
  description,
  priority,
  date
) => {
  const newTask = {
    title,
    description,
    priority,
    date,
    isFinished: false,
  };
  addDoc(collectionReference, newTask);
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

// function that moves task to specific container

import { database } from "./firebase";
import { doc } from "firebase/firestore";

// TODO fix moveTask

const moveTask = async (docRef, containerPath) => {
  const id = docRef.id;
  const docSnap = await getDoc(docRef);
  const newDocRef = doc(database, containerPath, id);

  // copy task data and set it in containerPath
  setDoc(newDocRef, docSnap.data());

  // delete the original task
  deleteDoc(docRef);
};

export { moveTask };
