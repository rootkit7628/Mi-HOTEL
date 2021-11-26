import React, {useState, useEffect} from 'react'
import CarouselRoot from './CarouselRoot'
import {ScrollView,
        View,
        FlatList,
        SectionList,
        StyleSheet,
        Text,
        TouchableOpacity,
        Image
      }from 'react-native'

import dessert from '../datas/Dessert'
import resistance from '../datas/Resistance'
import snack from '../datas/Snack'

// platList.category.params

const PlatList = () => {

        return(
          <View style={styles.container}>

              <View style={styles.foodCategories}>
                  <Text style = {styles.categories}>Snack</Text>
              </View>

              <View style={styles.carousel}>
                  <CarouselRoot items={snack} />
              </View>


              <View style={styles.foodCategories}>
                  <Text style = {styles.categories}>Resistance</Text>
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
          </View>
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
    padding: 150,
    backgroundColor: "rgb(255,255,255)"
  }
})

const Command = () => {
  return(
      <PlatList/>
  )
}

export default Command

/* <View style={styles.container}>
    <View style={styles.lmjShoppingList}>
        <CarouselRoot items={snack} />
        <CarouselRoot items={resistance} />
        <CarouselRoot items={dessert} />
        <SectionList
          sections= {[{title: 'snack',
                      data: snack
                     },
                     {title: 'resistance',
                      data: resistance
                     },
                     {title: 'dessert',
                     data: dessert
                     }
                   ]}

          renderItem={
            ({item}) => {
              return (
                    <View style={styles.container}>
                       <View style={styles.lmjShoppingList}>
                          <Image style={styles.image} source={item.cover}/>
                         <Text>{item.name}</Text>
                         <Text>{item.price}</Text>
                         <TouchableOpacity>
                            <Text>Add</Text>
                         </TouchableOpacity>
                      </View>
                  </View>
              )
            }
          }

          renderSectionHeader={({section}) => {
            return(
                <Text style={
                  {padding:20,
                  backgroundColor:"black",
                color:"white"}
                }>{section.title}</Text>
              )}
          }
        />
   </View>
</View> */
