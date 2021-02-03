import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { AddCardBody, PostPayload } from "../../apis/post-function";

const Post: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [caption, setCaption] = useState<string>("");

  function submitValue(): void {
    const payload: PostPayload = {
      title: title,
      caption: caption,
      postDate: new Date(),
      updateDate: null
    };

    AddCardBody(payload)
  }

  return (
    <View>
      <View style={styles.container}>
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
      </View>

      <View style={{paddingTop: 32}}>
          <Button
              title="送信"
              onPress={() => submitValue()} // ユーザー登録メソッドを実行
          />
      </View>
    </View>
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

export default Post;