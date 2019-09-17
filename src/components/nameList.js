import React, { Component } from 'react'
import { Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { ListItem } from 'native-base'
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

    componentWillMount = () => {
        this.getAllName()
    }

    componentWillUnmount() {
        this.getAllName()
    }

    getAllName = () => {
        this.props.dispatch(getAllName())
            .then(() => {
                this.setState({
                    isLoading: false,
                    todoList: this.props.todoLists
                })
            })
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
                        <FlatList
                            data={this.state.todoList}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.nama_peserta}
                            scrollEnabled={true}
                            showsVerticalScrollIndicator={false}
                            style={{ marginBottom: 90 }}
                        />
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
    txtCapital: {
        textTransform: 'capitalize'
    }
})