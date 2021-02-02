import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface Navigation {
  navigation: NavigationScreenProp<any, any>;
}

const TopContens: React.FC<Navigation> = ({
  navigation
}) => {
  return (
    <View>
      <View>
        <Text>CampFoodSNS</Text>
        <Text>キャンプで作ったご飯のレシピなどを投稿するSNS</Text>
      </View>
      <View>
        <Button
        title="ログイン"
        onPress={() => navigation.navigate("Login")}/>
        <Button
          title="新規登録"
          onPress={() => navigation.navigate('SignIn')}/>
      </View>
    </View>
  )
};

export default TopContens;