import React, { useState } from "react";
import { Button, View, StyleSheet, TextInput, Text } from "react-native";
import firebase from "./firebase";

interface loginInfo {
  email: string;
  password: string;
}

export const googleSignUp = (info: loginInfo) => {
  firebase.auth().createUserWithEmailAndPassword(info.email, info.password)
  .then(user => {
      if (user) {
          console.log("Success to Signup")
      }
  })
  .catch(error => {
      console.log(error);
  })
}

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // ユーザー登録のメソッド
  const signUp = () => {
      const submitValue: loginInfo = {
        email,
        password
      }
      googleSignUp(submitValue);
  }
  return (
    <View style={styles.container}>
      <Text>新規登録</Text>
      <View style={styles.inputWrap}>
          <Text style={styles.label}>メールアドレス</Text>
          <TextInput
              style={styles.textInput}
              onChangeText={(email: string) => setEmail(email)}
              value={email}
              placeholder="メールアドレスを入力してください"
              placeholderTextColor="#777"
          />
      </View>

      <View style={styles.inputWrap}>
          <Text style={styles.label}>パスワード</Text>
          <TextInput
              style={styles.textInput}
              onChangeText={(password: string) => setPassword(password)}
              value={password}
              placeholder="パスワードを入力してください"
              placeholderTextColor="#777"
          />
      </View>

      <View style={{paddingTop: 32}}>
          <Button
              title="送信"
              onPress={() => signUp()} // ユーザー登録メソッドを実行
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  textInput: {
  },
  password: {
  },
  label: {
  },
  inputWrap: {}
});