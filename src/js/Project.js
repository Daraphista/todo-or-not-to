// function that creates a project document in firestore

import {
  addDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

const createProject = (collection, title) => {
  addDoc(collection, {
    title: title,
  });
};

export { createProject };

// function that edits a project to another collection

const editProject = (document, updatedDocument) => {
  setDoc(document, updatedDocument, { merge: true });
};

export { editProject };

// function that deletes a project and it's subcollections

import { getUserData } from "./user-data";
import { database } from "./firebase";
import { doc } from "firebase/firestore";

// function to manually delete subcollections of project document
const deleteProjectSubcollections = (document) => {
  const projectPath = document._key.path.segments.join("/");
  const tasksCollectionPath = `${projectPath}/tasks`;

  console.log(tasksCollectionPath);

  getUserData(database, tasksCollectionPath, (querySnapshot) => {
    querySnapshot.forEach((task) => {
      const docRef = doc(database, tasksCollectionPath, task.id);
      deleteDoc(docRef);
    });
  });
};

const deleteProject = (document) => {
  deleteProjectSubcollections(document);
  deleteDoc(document);
};

export { deleteProject };
