// function that creates a project document in firestore

import { addDoc } from "firebase/firestore";

const createProject = (collection, title) => {
  addDoc(collection, {
    title: title,
  });
};

export { createProject };
