import React from 'react'
import {View,
        TextInput,
        StyleSheet,
        Text,
        TouchableOpacity } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login'
import Root from './Root'

const Stack = createNativeStackNavigator()

const Authentification = ({navigation}) => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Root" component={Root}/>
    </Stack.Navigator>
  )
}

export default Authentification
