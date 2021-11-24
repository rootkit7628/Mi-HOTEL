import React from 'react'
import {Image,
        StyleSheet,
        Text,
        View,
        TouchableOpacity} from 'react-native'


const Acceuil = ({navigation}) => {
  // je sais pas pourquoi j'ai besoin de props mais besoin
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#009894",
      justifyContent: "center",
    },
    logo:{
      flex:3,
      flexDirection: "row",
      justifyContent: "center",
      alignItems:"center",
    },
    image:{
      flex: 1,
      aspectRatio: 1.5,
      resizeMode: 'contain',
    },
    navigationContainer:{
      flex:1,
      justifyContent:"center",
      backgroundColor: "#009894",

    },
    signInContainer:{
      alignItems: "center"
    },
    signUpContainer:{
      flex:1,
      flexDirection: "row",
      alignItems: "center"
    },
    bouton:{
      flex:1,
      textAlign: "center",
      backgroundColor:"white",
      margin: 20,
      borderRadius: 7
    },
    text: {
      padding: 10,
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

            <View style={styles.navigationContainer}>
              <View style={styles.signInContainer}>
                <TouchableOpacity
                style={styles.bouton}
                onPress={
                  ()=> navigation.navigate('Authentification')
                }>
                    <Text style={styles.text}>Sign in</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.signUpContainer}>
                <Text style={{textAlign:"center", margin:15}}>Don't have an account?</Text>
                <TouchableOpacity style={styles.bouton}>
                    <Text style={styles.text}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
  )
}

export default Acceuil
