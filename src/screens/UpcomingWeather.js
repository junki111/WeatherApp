import React from "react"
import { SafeAreaView, View, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native'
import ListItem from "../components/ListItem"

const UpcomingWeather = ({weatherData}) => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={`${item.main.temp_min}°`}
            max={`${item.main.temp_max}°`}
        />
    )

    const { container, image } = styles

    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                source={require('../../assets/cloudy_sky.jpg')} 
                style={image}
                resizeMode='cover'    
            >
                {/* <Text>This is the UpcomingWeather view</Text> */}
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                    ItemSeparatorComponent={() => <View style={{backgroundColor:'white' , height: 2}}/>}
                    ListEmptyComponent={() => <Text>There is no data to show</Text>}
                />
            </ImageBackground>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'slategrey'
    },
    image: {
        flex: 1
    }
})

export default UpcomingWeather