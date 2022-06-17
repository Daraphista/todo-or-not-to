// Get user data

import { collection, query, onSnapshot } from "firebase/firestore";

const getUserData = (database, path, callback) => {
  const collectionQuery = query(collection(database, path));
  const unsub = onSnapshot(collectionQuery, callback);
};

export { getUserData };

// set user data if user is new or doesn't have data

import { database } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

const setNewUserData = (user) => {
  // set document using user id as it's id
  setDoc(doc(database, "user-data", user.uid), {
    email: user.email,
  });

  // set containers collection in user document
  setDoc(doc(database, `user-data/${user.uid}/containers`, "inbox"), {
    title: "inbox",
  });
  setDoc(doc(database, `user-data/${user.uid}/containers`, "today"), {
    title: "today",
  });
  setDoc(doc(database, `user-data/${user.uid}/containers`, "projects"), {
    title: "projects",
  });
};

export { setNewUserData };

const UserData = (() => {})();
