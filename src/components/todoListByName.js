import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { FlatGrid } from 'react-native-super-grid';
import { Card, CardItem, List, ListItem } from 'native-base'

import { getTodoByName } from '../publics/actions/todolist';
import moment from 'moment'

export class TodoListByName extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            nama_peserta: this.props.nama_peserta
        }
    }

    componentDidMount = async () => {
        await this.getTodoByName()
    }

    getTodoByName = () => {
        this.props.dispatch(getTodoByName(this.state.nama_peserta))
            .then(() => {
                this.setState({ data: this.props.todoLists })
            })
    }

    renderItem = ({ item }) => {
        return (
            <Card>
                <CardItem>
                    <View style={styles.rightItem}>
                        <Text style={styles.txtTime}>{item.jam_awal} - {item.jam_berakhir}</Text>
                    </View>
                </CardItem>
                <CardItem>
                    <Text>{item.kegiatan}</Text>
                </CardItem>
            </Card>
        )
    }

    render() {
        console.warn('data by name: ', this.state.data)
        return (
            <>
                <List>
                    <ListItem>
                        <Text>{moment().format('dddd, MMMM YYYY').toString()}</Text>
                    </ListItem>
                </List>
                <FlatGrid
                    itemDimension={130}
                    showsVerticalScrollIndicator={false}
                    items={this.state.data}
                    style={styles.gridView}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoLists: state.todolist.todoLists
    }
}

export default connect(mapStateToProps)(TodoListByName)

const styles = StyleSheet.create({
    rightItem: {
        flex: 1,
        alignItems: 'flex-end'
    },
    txtTime: {
        fontSize: 12,
        textAlign: 'right'
    },
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    root: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
