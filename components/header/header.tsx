import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Header: React.FC = () => {
  return (
    <View>
      <Button
        title="ログイン"
        onPress={() => null}/>
      <Button
        title="新規登録"
        onPress={() => null}/>
    </View>
  )
};

export default Header;