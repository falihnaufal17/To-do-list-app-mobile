import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TodoListByName from '../../components/todoListByName'

export class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.navigation.getParam('nama_peserta')
        }
    }
    render() {
        return (
            <>
                <View style={styles.appBar}>
                    <View style={styles.paddBar}>
                        <Text style={styles.titleBar}>Daftar Kegiatan {this.state.name}</Text>
                    </View>
                </View>
                <TodoListByName nama_peserta={this.state.name} />
            </>
        )
    }
}

export default Detail

const styles = StyleSheet.create({
    titleBar: {
        fontSize: 18,
        fontWeight: '600',
        textTransform: 'capitalize'
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
