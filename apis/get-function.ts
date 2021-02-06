import firebase from "../auth/firebase";

import { PostPayload } from "./post-function";

export const getPostItems = () => {
  try {
    const items: PostPayload[] = [];
    firebase
    .firestore()
    .collection("test")
    .get()
    .then(data => {
      if (data.empty) {
        return;
      }
      data.forEach(doc => {
        items.push({
          title: doc.data().title,
          caption: doc.data().caption,
          postDate: doc.data().postDate,
          updateDate: doc.data().updateDate,
        })
      })
      console.log("items", items)
    })
    .catch(error => {
      throw new Error(error.message)
    })
    return { items };
  } catch (error) {
    return { error };
  }
}