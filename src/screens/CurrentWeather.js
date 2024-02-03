import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { WeatherType } from '../utilities/WeatherType'

const CurrentWeather = () => {
    const { wrapper, container, temp, feels, highLow, highLowWrapper, bodyWrapper, description, message } = styles

    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels like 5</Text>
                <RowText 
                  messageOne={'High: 8'}
                  messageTwo={'Low: 3'}
                  messageOneStyles={highLow}
                  messageTwoStyles={highLow}
                  containerStyles={highLowWrapper}
                />
            </View>
            <RowText 
                  messageOne={"It's sunny"}
                  messageTwo={WeatherType.Clear.message}
                  messageOneStyles={description}
                  messageTwoStyles={message}
                  containerStyles={bodyWrapper}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0
  },
  wrapper: {
    backgroundColor: 'lavenderblush',
    flex: 1
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather
