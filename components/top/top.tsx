import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { getPostItems } from "../../apis/get-function";
import { PostPayload } from "../../apis/post-function";
import firebase from "../../auth/firebase";

const getPostItem: React.FC = () => {
  const data: PostPayload[] = [];
  const [item, setItem] = useState<PostPayload[]>([]);

  useEffect(() => {
    firebase.firestore().collection("test").get()
    .then((snapShot) => {
      if(snapShot.empty) {
        return;
      }
      snapShot.forEach(doc => {
        data.push({
          title: doc.data().title,
          caption: doc.data().caption,
          postDate: doc.data().postDate,
          updateDate: doc.data().updateDate
        })
      })
      setItem(data);
      })
      .catch(error => {
        console.error(error)
      })
  })

  return (
    <View>
      { item.length > 0 ?
        <PostContent item={item} />
        :
        <Text>loading</Text>
      }
    </View>
  )
}

interface content {
  item: PostPayload[]
}

interface item {
  item: PostPayload
}

const PostContent: React.FC<content> = ({
  item
}) => {
  return (
    <View>
      {item.map(doc => (
        <Item item={doc}/>
      ))}
    </View>
  )
}

const Item: React.FC<item> = ({
  item
}) => {
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.caption}</Text>
    </View>
  )
}

export default getPostItem;