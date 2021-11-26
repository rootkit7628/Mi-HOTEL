import React, {useState, useEffect} from 'react'
import CarouselRoot from './CarouselRoot'
import {ScrollView,
        View,
        FlatList,
        SectionList,
        StyleSheet,
        Text,
        TouchableOpacity,
        StatusBar,
        Image
      }from 'react-native'

import dessert from '../datas/Dessert'
import resistance from '../datas/Resistance'
import snack from '../datas/Snack'


const PlatList = () => {

        return(
          <React.Fragment>
          <StatusBar/>
          <ScrollView style={styles.container}>

              <View style={styles.foodCategories}>
                  <Text style = {styles.categories}>Snack</Text>
              </View>

              <View style={styles.carousel}>
                  <CarouselRoot items={snack} />
              </View>


              <View style={styles.foodCategories}>
                  <Text style ={styles.categories}>Resistance</Text>
              </View>

              <View style={styles.carousel}>
                  <CarouselRoot items={resistance} />
              </View>


              <View style={styles.foodCategories}>
                  <Text style = {styles.categories}>Dessert</Text>
              </View>

              <View style={styles.carousel}>
                  <CarouselRoot items={dessert} />
              </View>

          </ScrollView>
        </React.Fragment>
       )
   }

const styles = StyleSheet.create({
  container:{flex:1, backgroundColor:"white"},
  lmjShoppingList:{flex:1},
  foodCategories:{
    padding: 20,
    textAlign:"center",
    backgroundColor: "black",
    marginBottom: 50
    },
  categories:{
    color:"#fff"
  },
  carousel:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255,255,255)"
  }
})

const Command = () => {
  return(
      <PlatList/>
  )
}

export default Command
