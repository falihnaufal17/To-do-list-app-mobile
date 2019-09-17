import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'

export class Splash extends Component {
    render() {
        return (
            <View style={styles.root}>
                <ActivityIndicator size="large" color="blue" />
                <Text>Loading ...</Text>
            </View>
        )
    }
}

export default Splash

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
