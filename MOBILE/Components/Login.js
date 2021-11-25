import React from 'react'
import {View,
        StyleSheet,
        Text,
        TextInput,
        TouchableOpacity } from 'react-native'


const Login = ({navigation}) => {
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
              <TouchableOpacity style={styles.submit} onPress={
                  () => navigation.navigate('Root')
              }>
                  <Text>Submit</Text>
              </TouchableOpacity>
          </View>
    </View>
  )
}

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

export default Login
