import firebase from "../auth/firebase";

// TODO:ID指定で削除できるようにする
export const deletePostData = () => {
  try {
    firebase
    .firestore()
    .collection("test")
    .doc("336JaBJhQzwm7yuYVdR6")
    .delete()
    .then(() => {
      console.log("delete post data")
    })
    .catch((error) => {
      throw new Error(error.message)
    })
    return;
  } catch(error) {
    return { error }
  }
}