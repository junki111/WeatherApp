import React from "react"
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from "react-native"
import IconText from "../components/IconText"

const City = () => {
    const { container, image, text, populationWrapper, populationText, riseSetWrapper, riseSetText } = styles

    return (
        <SafeAreaView style={[container]}>
            <ImageBackground 
                source={require('../../assets/kuala-lumpur.jpg')}
                style={image}
            >
                <Text style={[text, {fontSize: 40}]}>Kuala Lumpur</Text>
                <Text style={[text, {fontSize: 30}]}>Malaysia</Text>
                <View style={[populationWrapper, styles.rowLayout]}>
                    <IconText iconName='user' iconColor='red' bodyText='80000' bodyTextStyles={populationText}/>
                </View>
                <View style={[riseSetWrapper, styles.rowLayout]}>
                    <IconText iconName='sunrise' iconColor='white' bodyText='10:46:58am' bodyTextStyles={riseSetText} />
                    <IconText iconName='sunset' iconColor='white' bodyText='17:28:16pm' bodyTextStyles={riseSetText} />
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
        alignItems: 'center',
    }
})

export default City