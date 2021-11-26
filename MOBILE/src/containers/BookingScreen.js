import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import LinearGradient from 'react-native-web-linear-gradient';
import {
  heightPercentToDp as hp,
  widthPercentToDp as wp,
} from '../utils/sizeUtils';
import COLORS from '../utils/colorUtils';
import OrangeButton from '../components/OrangeButton';
import {useNavigation} from '@react-navigation/native';
import IMAGES from '../images';

const BookingScreen = () => {
  const bookingData = [
    {
      name: 'Mi-Hotel',
      image: IMAGES.bali,
      info: '',
    },
    {
      name: 'Mi-Hotel',
      image: IMAGES.delux,
      info: '',
    },
    {
      name: 'Mi-Hotel',
      image: IMAGES.india,
      info: '',
    },
  ];
  const roomType = [
    {name: 'Normal', cost: '200000Ar', image: IMAGES.normal},
    {name: 'Delux', cost: '200000Ar', image: IMAGES.delux},
    {name: 'Monarch', cost: '200000Ar', image: IMAGES.monarch},
    {name: 'Suite', cost: '200000Ar', image: IMAGES.suite},
  ];
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftposition, setLeftposition] = useState(new Animated.Value(wp(100)));
  const [bottomPartFlex, setbottomPartFlex] = useState(new Animated.Value(1));
  const [infoClicked, setinfoClicked] = useState(false);
  const [selectedRoom, setselectedRoom] = useState(-1);
  const [isRoomBooked, setisRoomBooked] = useState(false);
  const [bookedLeftPosition, setbookedLeftPosition] = useState(
    new Animated.Value(wp(100)),
  );

  useEffect(() => {
    doAnimation(leftposition, 0, 250);
  }, [currentIndex]);

  useEffect(() => {
    if (infoClicked) {
      doAnimation(bottomPartFlex, 5, 500);
    } else {
      doAnimation(bottomPartFlex, 1, 500);
    }
  }, [infoClicked]);

  const doAnimation = (arg: any, value: number, timer: number) => {
    Animated.timing(arg, {
      toValue: value,
      duration: timer,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.topPartStyle, {left: leftposition}]}>
        <ImageBackground
          source={bookingData[currentIndex].image}
          style={{flex: 2}}>
          <TouchableOpacity
            style={styles.floatingButtonStyle}
            onPress={() => {
              if (infoClicked) {
                setinfoClicked(false);
              } else {
                if (currentIndex <= 1) {
                  setCurrentIndex(currentIndex + 1);
                } else {
                  setCurrentIndex(0);
                }
                doAnimation(leftposition, wp(100), 0);
              }
            }}>
            <FontAwesome5 name="angle-double-right"
              style={[
                styles.rightArrowStyle,
                {
                  fontSize: 75,
                  color: "white",
                  transform: [{rotate: infoClicked ? '180deg' : '0deg'}],
                },
              ]}
            />
          </TouchableOpacity>
          <Text style={styles.countryNameStyle}>

          </Text>
        </ImageBackground>
      </Animated.View>
      <Animated.View style={{flex: bottomPartFlex}}>
        <View
          style={{flex: 1, backgroundColor: "white"}}>
          {infoClicked ? (
            isRoomBooked ? (
              <Animated.View
                style={[
                  styles.bookedSectionStyle,
                  {
                    left: bookedLeftPosition,
                  },
                ]}>
                <View style={styles.tickIconContainer}>
                  <Image source={IMAGES.tick} style={styles.tickIconStyle} />
                </View>
                <Text style={styles.confirmationTextStyle}>
                  Salle reservée!!!
                </Text>
                <OrangeButton
                  text="Revenir à l'acceuil"
                  style={{alignSelf: 'center', marginVertical: hp(2)}}
                  onPress={() => {
                    setinfoClicked(false);
                    setisRoomBooked(false);
                    setselectedRoom(-1);
                    doAnimation(bookedLeftPosition, wp(100), 0);
                    navigation.navigate('welcome');
                  }}
                />
              </Animated.View>
            ) : (
              <View style={styles.detailsSectionStyle}>
                <View style={styles.infoHeaderStyle}>
                  <Text style={styles.infoTextStyle}>Reservation de salle</Text>
                </View>
                <View style={styles.roomContainer}>
                  {roomType.map((room, index) => (
                    <TouchableOpacity
                      key={index.toString()}
                      style={{margin: wp(5), alignItems: 'center'}}
                      onPress={() => setselectedRoom(index)}>
                      <Text style={styles.detailsTextName}>{room.name}</Text>
                      <Image
                        source={room.image}
                        style={styles.roomImageStyle}
                      />
                      {selectedRoom === index && (
                        <View style={styles.roomSelectionStyle}>
                          <Image
                            source={IMAGES.tick}
                            style={styles.selectionTickStyle}
                          />
                        </View>
                      )}

                      <Text style={styles.detailsTextCost}></Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <OrangeButton
                  text="Reserver"
                  style={{alignSelf: 'center', marginVertical: hp(2)}}
                  onPress={() => {
                    if (selectedRoom >= 0) {
                      setisRoomBooked(true);
                      doAnimation(bookedLeftPosition, 0, 250);
                    }
                  }}
                />
              </View>
            )
          ) : (
            <View style={{flex: 1}}>
              <View style={{marginTop: hp(5), marginHorizontal: wp(4)}}>
                <Text style={styles.headerText}></Text>
                <Text style={styles.descriptionText}>
                  {bookingData[currentIndex].info}
                </Text>
              </View>
              <OrangeButton
                text="NOS SERVICES"
                style={{alignSelf: 'center', marginVertical: hp(2)}}
                onPress={() => setinfoClicked(true)}
              />
            </View>
          )}
        </View>
      </Animated.View>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.GRADIENT_1,
  },
  detailsTextName:
  { color: COLORS.black,
    fontFamily: 'Arial',
    position:"relative",
    bottom:10
  },
  detailsTextCost:
  { color: COLORS.white,
    fontFamily: 'Arial',
    backgroundColor: COLORS.GRADIENT_1
  },
  topPartStyle: {flex: 2, zIndex: 2},
  floatingButtonStyle: {
    backgroundColor: "transparent",
    width: wp(20),
    height: wp(20),
    position: 'absolute',
    right: wp(10),
    bottom: hp(10),
    borderRadius: wp(8),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,

  },
  rightArrowStyle: {
    width: wp(10),
    height: wp(10),
    tintColor: COLORS.white,
  },
  countryNameStyle: {
    fontFamily: 'Arial',
    fontSize: wp(14),
    fontWeight: "bold",
    position: 'absolute',
    bottom: hp(10),
    color: COLORS.red,
    zIndex: 1,
  },
  bookedSectionStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: hp(6),
  },
  tickIconContainer: {
    padding: wp(8),
    borderWidth: wp(2),
    borderColor: COLORS.green,
    borderRadius: wp(8),
  },
  tickIconStyle: {
    width: wp(24),
    height: wp(24),
    tintColor: COLORS.green,
  },
  confirmationTextStyle: {
    color: COLORS.white,
    fontFamily: 'Arial',
    fontSize: wp(10),
  },
  detailsSectionStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: hp(6),
  },
  infoHeaderStyle: {
    backgroundColor: COLORS.green,
    width: wp(50),
    alignItems: 'center',
    padding: wp(5),
    borderRadius: wp(2),
  },
  infoTextStyle: {
    color: COLORS.white,
  },
  roomContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: wp(5),
    justifyContent: 'center',
  },
  roomImageStyle: {
    width: wp(26),
    height: wp(26),
    borderRadius: wp(4),
  },
  roomSelectionStyle: {
    width: wp(26),
    height: wp(26),
    borderRadius: wp(4),
    position: 'absolute',
    backgroundColor: COLORS.grey_opacity,
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectionTickStyle: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(4),
    tintColor: COLORS.orange,
  },
  descriptionText: {
    fontFamily: 'Arial',
    color: COLORS.black,
    letterSpacing: wp(0.1),
    marginVertical: hp(2),
  },
  headerText: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.white,
    letterSpacing: wp(0.2),
  },
});
