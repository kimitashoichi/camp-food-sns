import firebase from "../auth/firebase";

import { PostPayload } from "./post-function";

const testEditData: PostPayload = {
  title: "edit post data",
  caption: "caotion caption edit",
  postDate: new Date(),
  updateDate: new Date()
}


// TODO:ID指定でデータ編集できるようにする
export const editPostData = () => {
  try {
    firebase
    .firestore()
    .collection("test")
    .doc("3x0plRtuxPxyhQzDCzu9")
    .update(testEditData)
    .then(() => {
      console.log("OK edit post data")
    })
    .catch(error => {
      throw new Error(error.message)
    })
    return;
  } catch (error) {
    return { error }
  }
}