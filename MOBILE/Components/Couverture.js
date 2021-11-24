import React from 'react'
import {Image,
        StyleSheet,
        Text,
        View,
        TouchableOpacity} from 'react-native'


const Acceuil = ({props}) => {
  // je sais pas pourquoi j'ai besoin de props mais besoin
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#009894",
      justifyContent: "center",
    },
    logo:{
      flex:1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems:"center",

    },
    loginContainer:{
      flex:1,
      flexDirection: "row",
      justifyContent:"center",
      backgroundColor: "#009894",
      border: "black solid 1px"
    },
    image:{
      height: "50%",
      width: "50%"
    },
    boutonLogin:{
      textAlign: "center",
      margin: 10
    },
    textLogin: {
      padding: 5,
      backgroundColor: "white",
      color: "#139494",
      borderRadius: 3

    }
  })

  return(
    //nothing essential yet
        <View style={styles.container}>
            <View style={styles.logo}>
              <Image style ={styles.image} source={require('../assets/couverture.png')}/>
            </View>
            <View style={styles.loginContainer}>
              <TouchableOpacity style={styles.boutonLogin}>
                  <Text style={styles.textLogin}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boutonLogin}>
                  <Text style={styles.textLogin}>Sign up</Text>
              </TouchableOpacity>
            </View>
        </View>
  )
}

export default Acceuil
