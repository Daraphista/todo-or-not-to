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
  const displayContainerTitle = (containerTitlePath, parentDiv) => {
    // create inbox container heading
    const containerHeaderElement = document.createElement("h1");
    parentDiv.appendChild(containerHeaderElement);
    
    // read and listen to the inbox container document
    const unsubToInbox = onSnapshot(doc(database, containerTitlePath), (doc) => {
      // set inboxHeaderElement's textContent to the inbox container document's title
      containerHeaderElement.textContent = doc.data().title;
    });
  };

  const displayContainerTasks = async (containerTasksPath, parentDiv) => {  
    // create task container div
    const taskContainerElement = document.createElement("div");
    taskContainerElement.classList.add("task-container");
    parentDiv.appendChild(taskContainerElement);
    
    const tasksQuery = query(collection(database, containerTasksPath));
    const tasksSnapshot = await getDocs(tasksQuery);
    tasksSnapshot.forEach((doc) => {
      const taskElement = document.createElement("div");
      taskContainerElement.appendChild(taskElement);
      taskElement.textContent = doc.data().title;
    });
  }

  const displayContainerData = (uid, containerName, parentDiv, className) => {
    // create container element
    const containerElement = document.createElement("div");
    containerElement.classList.add(className);
    parentDiv.appendChild(containerElement);

    // get container document path
    const containerPath = `user-data/${uid}/containers/${containerName}`;

    displayContainerTitle(containerPath, containerElement);

    // get container tasks path
    const containerTasksPath = `user-data/${uid}/containers/${containerName}/tasks`;

    displayContainerTasks(containerTasksPath, parentDiv);
  }
  
  const displayInboxData = (uid, parentDiv) => {
    // get inbox container path
    const inboxPath = `user-data/${uid}/containers/inbox`;
    
    // get inbox container tasks path
    const inboxTasksPath = `user-data/${uid}/containers/inbox/tasks`;    
    
    // create inbox container element
    const inboxContainerElement = document.createElement("div");
    inboxContainerElement.classList.add("container-inbox");
    parentDiv.appendChild(inboxContainerElement);

    displayContainerTitle(inboxPath, inboxContainerElement);
    displayContainerTasks(inboxTasksPath, inboxContainerElement);
  };

  const displayUserData = (database, uid) => {
    // get data div in main
    const dataDiv = document.querySelector("main .content .data");
    displayInboxData(uid, dataDiv);
  };
  const clearDisplayedUserData = () => {};

  return { displayUserData, clearDisplayedUserData };
})();

export default UserData;
