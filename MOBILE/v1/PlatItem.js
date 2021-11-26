// styles @PlatnItem.ss

import React from 'react'
import {View,
        Text,
        Image,
        StyleSheet} from 'react-native'

const PlatItem = ({cover, name, price}) => {
  return(
    <View style={styles.lmjPlatItem}
          onPress= {() => handleClick}>
          <Text style={styles.lmjPlantItemPrice}>
              {price}Ar
          </Text>
    <Image source={require(cover)} />
    </View>
  )
}

const styles = StyleSheet.create(
  {
    lmjPlantItem:{

    },
    lmjPlatItemPrice:{

    },
    lmjPlatItemCover:{

    }
  }
)

export default PlatItem
