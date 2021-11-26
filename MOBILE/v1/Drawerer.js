import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import PlatList from './PlatList'
import CommandList from './CommandList'

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const BottomNavigation = ({navigation}) => {
  return(
    <Tab.Navigator screenOptions={
      ({route}) => ({
        headerShown:false,
        tabBarIcon:() => {
          let icon
          if(route.name === 'MI-Hotel'){
            icon = 'utensils'
          }
          else if(route.name === "Panier"){
            icon = 'shopping-cart'
          }
          return (<FontAwesome5 name={icon} color='#000' solid />)
      }
      })
    }>
      <Tab.Screen name="MI-Hotel" component={PlatList}/>
      <Tab.Screen name="Panier" component={CommandList} />
    </Tab.Navigator>
  )
}

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
      })
    }>
          <Drawer.Screen name="menu" component={BottomNavigation}/>
          <Drawer.Screen name="MI-Hotel" component={PlatList} />

    </Drawer.Navigator>
  )
}

export default Drawerer
