// function that creates a project document in firestore

import { addDoc, collection, deleteDoc, setDoc } from "firebase/firestore";

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

const deleteProject = (document) => {
  deleteDoc(document);
};

export { deleteProject };
