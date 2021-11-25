import * as React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from '@react-navigation/native'

import Carousel from 'react-native-snap-carousel'

export default class CardCarousselSalle extends React.Component {


    constructor(props){
        super(props);
        this.items = this.props.items;
        this.state = {
          activeIndex:0,
          items: this.items
      }
    }

    _renderItem({item,index}){
        return (
          <View style={styles.container}>
             <View style={styles.lmjShoppingList}>
                <Image style={styles.image} source={item.cover}/>
               <Text>{item.name}</Text>
               <Text>{item.price}</Text>
               <TouchableOpacity  style={styles.ajouter}>
                  <Text style={{color:"white"}}>Add</Text>
               </TouchableOpacity>
            </View>
        </View>
        )
    }

    render() {
        return (

            <View>
                <Carousel
                  layout={"default"}
                  ref={ref => this._carousel = ref}
                  data={this.state.items}
                  sliderWidth={500}
                  itemWidth={250}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>

        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 10
  },
  lmjShoppingList:{
    flex:1,
    borderRadius: 10
  },
  image:{
    width: 250,
    height: 225,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  ajouter:{
    padding: 10,
    backgroundColor:"green",
    textAlign:"center",
    width: 100
  }
})
