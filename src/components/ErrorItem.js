import React from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ErrorItem = ({ message }) => {
    return (
        <View style={styles.wrapper}>
            <Feather name="alert-triangle" size={100} color="red" />
            <Text style={styles.errorMessage}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'lavenderblush',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width
    },
    errorMessage: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center'
    }
})

export default ErrorItem
