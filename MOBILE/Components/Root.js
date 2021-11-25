import React from 'react'
import {Text} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Button, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

// le menu caché @sisiny gauche écran
const Drawerer = ({navigation}) => {
  return(
    <Drawer.Navigator screenOptions={({route}) => ({
        headerShown:false,
        tabBarIcon:() => {
            let icon
            if(route.name === 'command'){
                icon = 'utensils'
            }
            return (<FontAwesome5 name='utensils' color='#000' solid />)
        }
      })}>
          <Drawer.Screen name="menu" component={BottomNavigation}/>
          <Drawer.Screen name="command" component={Command} />
    </Drawer.Navigator>
  )
}
const Command = () => {
  return(
    <Text>Command</Text>
  )
}


const BottomNavigation = ({navigation}) => {
  return(
    <Tab.Navigator screenOptions={
      ({route}) => ({
        headerShown:false,
        tabBarIcon:() => {
          let icon
          if(route.name === 'Text'){
            icon = 'utensils'
          }
          return (<FontAwesome5 name='utensils' color='#000' solid />)
      }

      })
    }>
      <Tab.Screen name="command" component={Command}/>
    </Tab.Navigator>
  )
}

const Root = () => {
  return(
    <Drawerer/>
  )
}

export default Root
