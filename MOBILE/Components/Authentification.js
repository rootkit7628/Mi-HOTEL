import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native'

const Authentification = () => {

  /*

    /*
        // class="right"
        <svg viewBox="0 0 320 300">
            <defs>
                <linearGradient
                          inkscape:collect="always"
                          id="linearGradient"
                          x1="13"
                          y1="193.49992"
                          x2="307"
                          y2="193.49992"
                          gradientUnits="userSpaceOnUse">

                          <stop
                              style="stop-color:#ff00ff;"
                              offset="0"
                              id="stop876" />
                          <stop
                              style="stop-color:#ff0000;"
                              offset="1"
                              id="stop878" />
               </linearGradient>
           </defs>
           <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
      </svg>

      */

      const styles=StyleSheet.create({
        container:{
          flex:1,
          justifyContent: "center",
          alignItems: "center",
        },
        loginContainer:{
          padding: 20,
          backgroundColor:"#009894",
          borderRadius: 10
        },
        loginText:{
          fontSize: 46,
          textAlign: "center",
          color:"white"
        },
        input:{
          border: "1px solid #009894",
          borderBottomColor: "white",
          height: 30,
          marginBottom: 10
        },
        submit:{
          textAlign: "center",
          backgroundColor:"white",
          margin: 20,
          padding: 10,
          borderRadius: 7
        }
      })



  return(

    <View style={styles.container}>
    <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login</Text>
          <TextInput style={styles.input} placeholder="id"/>
          <TextInput
              style={styles.input}
              placeholder="password"
              secureTextEntry
          />
          <TouchableOpacity style={styles.submit}>
            <Text>Submit</Text>
          </TouchableOpacity>
    </View>
    </View>
  )

}


export default Authentification
