import firebase from "../auth/firebase";

export interface PostPayload {
  title: string;
  caption: string;
  postDate: Date;
  updateDate: Date | null;
}

// データ投稿
export const AddCardBody = async (post: PostPayload) => {
  try {
    await firebase
    .firestore()
    .collection('test')
    .doc()
    .set(post)
    .catch((error) => {
      console.log('postIdea Error Firebase')
      throw new Error(error.message);
    })
    const success = { success: 'PostIdea 200 ok' };
    console.log('postIdea OK Firebase')
    return { success }
  } catch(error) {
    console.log('postIdea Error')
    return { error }
  }
}