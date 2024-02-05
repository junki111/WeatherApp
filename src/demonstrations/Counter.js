import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, Button, StatusBar } from 'react-native'

const Counter = () => {
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        console.log(`Count is now: ${count}`)
    }, [count])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textWrapper}>{count}</Text>
            <Button
                color={'green'}
                title={'Increase Count'}
                onPress={() => setCount(count + 1)}
            />
            <Button
                color={'red'}
                title={'Decrease Count'}
                onPress={() => setCount(count - 1)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textWrapper: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Counter