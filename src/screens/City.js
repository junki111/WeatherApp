import React from 'react'
import {
    SafeAreaView,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    View
} from 'react-native'
import IconText from '../components/IconText'
import moment from 'moment'

const City = ({ weatherData }) => {
    const {
        container,
        image,
        text,
        populationWrapper,
        populationText,
        riseSetWrapper,
        riseSetText
    } = styles

    return (
        <SafeAreaView style={[container]}>
            <ImageBackground
                source={require('../../assets/kuala-lumpur.jpg')}
                style={image}
            >
                <Text style={[text, { fontSize: 40 }]}>{weatherData.name}</Text>
                <Text style={[text, { fontSize: 30 }]}>
                    {weatherData.country}
                </Text>
                <View style={[populationWrapper, styles.rowLayout]}>
                    <IconText
                        iconName="user"
                        iconColor="red"
                        bodyText={`Population: ${weatherData.population}`}
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, styles.rowLayout]}>
                    <IconText
                        iconName="sunrise"
                        iconColor="white"
                        bodyText={moment(weatherData.sunrise).format('h:mm:ss a')}
                        bodyTextStyles={riseSetText}
                    />
                    <IconText
                        iconName="sunset"
                        iconColor="white"
                        bodyText={moment(weatherData.sunset).format('h:mm:ss a')}
                        bodyTextStyles={riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    image: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red'
    },
    riseSetWrapper: {
        justifyContent: 'space-between',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default City
