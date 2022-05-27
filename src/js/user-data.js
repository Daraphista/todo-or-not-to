// Get user data

import { collection, query, onSnapshot } from "firebase/firestore";

const getUserData = (database, path, callback) => {
  const collectionQuery = query(collection(database, path));
  const unsub = onSnapshot(collectionQuery, callback);
};

export { getUserData };
