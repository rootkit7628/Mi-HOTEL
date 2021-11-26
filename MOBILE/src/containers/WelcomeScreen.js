import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TextInput,
} from 'react-native';

import {
  heightPercentToDp as hp,
  widthPercentToDp as wp,
} from '../utils/sizeUtils';
import COLORS from '../utils/colorUtils';
import OrangeButton from '../components/OrangeButton';
import {useNavigation} from '@react-navigation/native';

interface WelcomeScreenProps {}

const WelcomeScreen = (props: WelcomeScreenProps) => {
  const {} = props;
  const navigation = useNavigation();
  const [startClicked, setStartClicked] = useState(false);
  useEffect(() => {
    if (startClicked) {
      Animated.timing(bottomFlex, {
        toValue: 8,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(bottomFlex, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    }
  }, [startClicked]);
  const [bottomFlex, setbottomFlex] = useState(new Animated.Value(1));
  return (
    <React.Fragment>
      <View style={styles.topPart}>
        <Text style={styles.bookTextStyle}>Mi-Hotel</Text>
      </View>
      <Animated.View style={[styles.bottomPart, {flex: bottomFlex}]}>
        {startClicked ? (
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
              borderTopLeftRadius: wp(20),
            }}>
            <Text style={styles.loginTextStyle}></Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="EMAIL"
              placeholderTextColor={COLORS.white}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.textInputStyle}
              placeholder="PASSWORD"
              placeholderTextColor={COLORS.white}
              secureTextEntry
            />
            <OrangeButton
              text="Login"
              onPress={() => navigation.navigate('book')}
              style={{
                alignSelf: 'center',
                marginVertical: hp(2),
              }}
            />
          </View>
        ) : (
          <OrangeButton
            text="Découvrir"
            onPress={() => setStartClicked(true)}
            style={{
              alignSelf: 'center',
            }}
          />
        )}
      </Animated.View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  topPart: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingVertical: hp(10),
    alignItems: 'center',
  },
  bottomPart: {},
  bookTextStyle: {
    color: COLORS.grey,
    fontSize: wp(14),
    letterSpacing: wp(4),
    fontFamily: 'Arial',
  },
  loginTextStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: hp(1),
    color: COLORS.black,
    fontSize: wp(8),
    letterSpacing: wp(0.1),
    fontFamily: 'Arial',
  },
  textInputStyle: {
    borderRadius: wp(1),
    width: wp(70),
    height: hp(6),
    backgroundColor: COLORS.GRADIENT_OPACITY,
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: hp(2),
    color: COLORS.white,
    fontSize: wp(4),
    letterSpacing: wp(0.1),
    fontFamily: 'Arial',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    shadowColor: COLORS.GRADIENT_3,
  },
});

export default WelcomeScreen;
