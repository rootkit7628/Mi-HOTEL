import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
const width = Dimensions.get('window').width / 2 - 30;
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


import WelcomeScreen from '../../containers/WelcomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import BookingScreen from '../../containers/BookingScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const HomeScreen = ({navigation}) => {
  return(
    <Tab.Navigator screenOptions={
      ({route}) => ({
        headerShown:false,
        tabBarIcon:() => {
          let icon
          if(route.name === 'Mi-Hotel'){
            icon = 'utensils'
          }
          else if(route.name === "Commandes"){
            icon = 'shopping-cart'
          }
          return (<FontAwesome5 name={icon} color='#000' solid />)
      }
      })
    }>
      <Tab.Screen name="Mi-Hotel" component={Acceuil} />
      <Tab.Screen name="Commandes" component={Root}/>

    </Tab.Navigator>
  )
}

const fadeAnime = ({current}: {current: any}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});




const Acceuil = () => {
  return(
      <Stack.Navigator
        initialRouteName="welcome" // for development purpose.. will change once development over
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: fadeAnime,
        }}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="book" component={BookingScreen} />
      </Stack.Navigator>

  )
}

const Root = ({navigation}) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['PLAT DU JOUR', 'SNACK', 'DEJEUNER', 'DESSERT'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({food}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', food)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: food.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={food.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={food.img}
              style={{flex: 1, resizeMode: 'contain', height:100, width:300}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {food.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              {food.price} Ar
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 38, color: COLORS.blue, fontWeight: 'bold', marginBottom: 15}}>
            Mi-Hotel
          </Text>
        </View>
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'center'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={foods}
        renderItem={({item}) => {
          return <Card food={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const Maps = () => {
  return(
    <Text>Maps</Text>
  )
}
const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    flex:1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
});
export default HomeScreen;
