import React, { Component } from 'react'
import { Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { ListItem, View } from 'native-base'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { getAllName } from '../publics/actions/todolist'
import { TouchableOpacity } from 'react-native-gesture-handler';

export class NameList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todoList: [],
            isLoading: true
        }
    }

    componentDidMount = async () => {
        await this.getAllName()
    }

    componentWillMount = async () => {
        await this.getAllName()
    }

    getAllName = async () => {
        await this.props.dispatch(getAllName())
        await this.setState({
            isLoading: false,
            todoList: this.props.todoLists
        })
    }

    componentWillUnmount = async () => {
        await this.getAllName()
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity key={item.nama_peserta} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Detail', { nama_peserta: item.nama_peserta })}>
                <ListItem>
                    <Text style={styles.txtCapital}>{item.nama_peserta}</Text>
                </ListItem>
            </TouchableOpacity>
        )
    }

    render() {
        console.log('data ', this.state.todoList)
        return (
            <>
                {
                    this.state.isLoading ?
                        <ActivityIndicator size='large' color='blue' />
                        :
                        this.state.todoList.length > 0
                            ?
                            <FlatList
                                data={this.state.todoList}
                                renderItem={this.renderItem}
                                keyExtractor={item => item.nama_peserta}
                                scrollEnabled={true}
                                showsVerticalScrollIndicator={false}
                                style={{ marginBottom: 90 }}
                            />
                            :
                            <View style={styles.container}>
                                <Text style={styles.txtAlert}>Belum ada daftar peserta</Text>
                            </View>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoLists: state.todolist.todoLists
    }
}

export default withNavigation(connect(mapStateToProps)(NameList))

const styles = StyleSheet.create({
    txtAlert: {
        color: 'teal'
    },
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        margin: 0
    },
    txtCapital: {
        textTransform: 'capitalize'
    }
})