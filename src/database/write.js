import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "./config";

export async function save(data) {
  try {
    const docRef = await addDoc(collection(db, "Tasks"), data);

    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}

export async function update(id, data) {
  try {
    const docRef = doc(db, "Tasks", id);
    await updateDoc(docRef, data);
    return true;
  } catch {
    return false;
  }
}

export async function remove(id) {
  try {
    await deleteDoc(doc(db, "Tasks", id));
    return true;
  } catch {
    return false;
  }
}

export function clean(data) {
  try {
    data.forEach((doc) => {
      const id = doc.id;
      remove(id);
    });
    return true;
  } catch {
    return false;
  }
}
