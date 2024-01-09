import { db } from "./config";
import { collection, getDocs } from "firebase/firestore";

export async function load() {
  const querySnapshot = await getDocs(collection(db, "Tasks"));

  try {
    return processQuerySnapshot(querySnapshot);
  } catch (error) {
    throw new error("Fail to load Database");
  }
}

async function processQuerySnapshot(querySnapshot) {
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return data;
}
