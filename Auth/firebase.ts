// TODO: このファイルの配置場所を変更する
// TODO: firebaseに関する変数は環境変数ファイルに記述するようにする
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsej4gxBiYurO9ARdetnWgJThzMWazSUE",
  authDomain: "camp-food-sns.firebaseapp.com",
  projectId: "camp-food-sns",
  storageBucket: "camp-food-sns.appspot.com",
  messagingSenderId: "742927608402",
  appId: "1:742927608402:web:b4e25bec1e251af4fdcd8b",
  measurementId: "G-8MFJ4JW30M"
}

firebase.initializeApp(firebaseConfig);

export default firebase;


