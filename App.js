import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import Counter from './src/demonstrations/Counter'
import * as Location from 'expo-location'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
    const [weather, isLoading, error] = useGetWeather()

    if (weather && weather.list && !isLoading) {
        return (
            <NavigationContainer>
                <Tabs weather={weather} />
            </NavigationContainer>
        )
    }

    return (
        <View style={styles.container}>
            {error ? (
                <ErrorItem message={error} />
            ) : (
                <ActivityIndicator size={'large'} color={'lightcoral'} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default App
