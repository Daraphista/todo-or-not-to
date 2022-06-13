import "../style/style.css";

// Get user data when signed in

import { onAuthStateChanged } from "firebase/auth";
import { database, auth } from "./firebase";
import { getUserData } from "./user-data";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);

    const containersPath = `user-data/${user.uid}/containers`;
    const logContainers = (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    };

    getUserData(database, containersPath, logContainers);
  } else {
    console.log("user signed out");
  }
});

// Set new user data when signed in

import { doc, getDoc } from "firebase/firestore";
import { setNewUserData } from "./user-data";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docRef = doc(database, "user-data", user.uid);
    const document = await getDoc(docRef);
    if (document.data()) {
      console.log("user has data", document.data());
    } else {
      console.log("user hasn't any data");

      setNewUserData(user);
    }
  }
});
