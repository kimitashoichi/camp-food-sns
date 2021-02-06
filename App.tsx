import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TopClassComponent from "./components/top/top";
import TopContent from "./components/top/top-contents";
import { Login } from "./auth/login-component";
import { SignIn } from "./auth/signin-component";
import Post from "./components/post/post-screen"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TopClassComponent" component={TopClassComponent} />
        {/* <Stack.Screen name="TopContent" component={TopContent} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} /> */}
        {/* <Stack.Screen name="Post" component={Post} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
