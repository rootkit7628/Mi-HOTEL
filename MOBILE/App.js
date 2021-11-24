/**
  codes couleur:
    #139494
    #19055b
    #4fd4e0

    #ee2644
    #ec8f3c
    #ef860c
    
*/

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acceuil from './Components/Couverture'

const Stack = createNativeStackNavigator()

const App =()=> {
  return(
    <NavigationContainer>
        <Acceuil/>
    </NavigationContainer>
  )
}


export default App
