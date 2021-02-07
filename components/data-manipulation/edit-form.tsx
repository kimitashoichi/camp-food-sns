import React from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";

import { editPostData } from "../../apis/edit-function";
// TODO:特定の１データを取得後に各フォームに反映させる
// TODO:ID指定で編集できるようにする
const EditFrom: React.FC = () => {
  return (
    <View>
      {/* <View style={styles.container}></View>
      <Text>新規登録</Text>
      <View style={styles.inputWrap}>
          <Text style={styles.label}>タイトル</Text>
          <TextInput
              style={styles.textInput}
              onChangeText={(title: string) => setTitle(title)}
              value={title}
              placeholder="メールアドレスを入力してください"
              placeholderTextColor="#777"
          />
      </View>

      <View style={styles.inputWrap}>
          <Text style={styles.label}>投稿内容</Text>
          <TextInput
              style={styles.textInput}
              onChangeText={(caption: string) => setCaption(caption)}
              value={caption}
              placeholder="パスワードを入力してください"
              placeholderTextColor="#777"
          />
      </View> */}

      <Button
        title="Edit"
        onPress={() => editPostData()}
      />
    </View>
  )
};

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

export default EditFrom;