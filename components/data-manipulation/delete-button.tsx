import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import { deletePostData } from "../../apis/delete-function";

interface PostDataId {
  id: string
};

// TODO:削除したいデータのIDをこのコンポーネントに渡す
const DeleteButton: React.FC = () => {
  return (
    <View>
      <Button
        title="DELETE"
        onPress={() => deletePostData()}/>
    </View>
  )
}

export default DeleteButton;
