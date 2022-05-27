// function that creates a project document in firestore

import { addDoc, collection, setDoc } from "firebase/firestore";

const createProject = (collection, title) => {
  addDoc(collection, {
    title: title,
  });
};

export { createProject };

// function that edits a project to another collection

const editProject = (document, property, value) => {
  setDoc(document, property, value, { merge: true });
};

export { editProject };
