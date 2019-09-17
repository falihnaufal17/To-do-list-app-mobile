import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { Fab } from 'native-base'
import NameList from '../../components/nameList';

export class Home extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <View style={styles.appBar}>
                    <View style={styles.paddBar}>
                        <Text style={styles.titleBar}>Daftar Peserta</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <NameList />
                </View>
                <Fab
                    position="bottomRight"
                >
                    <Text>+</Text>
                    {/* <Icon name="add-circle-outline" type="Ionicons" /> */}
                </Fab>
            </>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    content: {
        marginVertical: 20,
    },
    titleBar: {
        fontSize: 18,
        fontWeight: '700'
    },
    paddBar: {
        padding: 15
    },
    appBar: {
        width: '100%',
        backgroundColor: 'white',
        height: 55,
        elevation: 2
    }
})