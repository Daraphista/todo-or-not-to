// set user data if user is new or doesn't have data

import { database } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { async } from "@firebase/util";

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

const UserData = (() => {
  const displayInboxData = async (database, uid, parentDiv) => {
    // create inbox container element
    const inboxContainerElement = document.createElement("div");
    inboxContainerElement.classList.add("container-inbox");
    parentDiv.appendChild(inboxContainerElement);

    // create inbox container heading
    const inboxHeaderElement = document.createElement("h1");
    inboxContainerElement.appendChild(inboxHeaderElement);

    // get inbox container path
    const inboxPath = `user-data/${uid}/containers/inbox`;

    // read and listen to the inbox container document
    const unsubToInbox = onSnapshot(doc(database, inboxPath), (doc) => {
      // set inboxHeaderElement's textContent to the inbox container document's title
      inboxHeaderElement.textContent = doc.data().title;
    });

    // create task container div
    const taskContainerElement = document.createElement("div");
    taskContainerElement.classList.add("task-container");
    inboxContainerElement.appendChild(taskContainerElement);

    // get inbox container tasks path
    const inboxTasksPath = `user-data/${uid}/containers/inbox/tasks`;

    const tasksQuery = query(collection(database, inboxTasksPath));
    const tasksSnapshot = await getDocs(tasksQuery);
  };

  const displayUserData = (database, uid) => {
    // get data div in main
    const dataDiv = document.querySelector("main .content .data");
    displayInboxData(database, uid, dataDiv);
  };
  const clearDisplayedUserData = () => {};

  return { displayUserData, clearDisplayedUserData };
})();

export default UserData;
