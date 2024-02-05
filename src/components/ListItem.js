import React from "react"
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { WeatherType } from "../utilities/WeatherType"
import moment from 'moment'

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props

    const { width, height } = Dimensions.get('window')

    // Calculate borderRadius as percentage of screen width
    const borderRadiusPercentage = 10
    const borderRadius = (width * borderRadiusPercentage) / 100

    const { viewStyle, date, temp, dateTimeWrapper } = styles

    return (
        <View style={[viewStyle, { borderRadius: borderRadius }]}>
            <Feather
                name={WeatherType[condition].icon}
                size={30}
                color={'white'}
            />
            <View style={dateTimeWrapper}>
                <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'pink',
        borderRadius: 20
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    dateTimeWrapper: {
        flexDirection: 'column'
    }
})

export default ListItem