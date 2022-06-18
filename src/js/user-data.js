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

const UserData = (() => {
  const displayUserData = (database, uid) => {
    // get data div in main
    const dataDiv = document.querySelector("main .content .data");

    // create inbox container element
    const inboxContainerElement = document.createElement("div");
    inboxContainerElement.classList.add("container-inbox");
    dataDiv.appendChild(inboxContainerElement);

    // create inbox container heading
    const inboxHeaderElement = document.createElement("h1");
    inboxContainerElement.appendChild(inboxHeaderElement);

    // get inbox container path
    const inboxPath = `user-data/${uid}/containers/inbox`

    // read and listen to the inbox container document
    const unsubToInbox = onSnapshot(doc(database, inboxPath), doc => {})
  };
  const clearDisplayedUserData = () => {};

  return { displayUserData, clearDisplayedUserData };
})();
