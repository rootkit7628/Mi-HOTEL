import React,  {useState} from 'react'
import {Text,
        View,
        TouchableOpacity} from 'react-native'

const Command = (props) => {

    // micréer state que sont le nom et le prix anle izy
    const [plat, setPlat] = useState(props.plat)
    const [prix, setPrix] = useState(props.price)

    return(
      <View>
          <Text>{plat} - {prix}</Text>
              <TouchableOpacity>
                  <Text>valider</Text>
            </TouchableOpacity>
      </View>
  )
}

const CommandList = () => {
  return(
    <View>

    </View>
  )
}

export default CommandList
