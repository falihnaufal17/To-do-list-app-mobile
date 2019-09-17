import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import Modal from "react-native-modal";
import { Button, CardItem, Item, Input, Form, Content, Label } from 'native-base';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux'

import { addTodo } from '../publics/actions/todolist'

export class ModalAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama_peserta: '',
            kegiatan: '',
        }
    }

    addTodo = async (data) => {
        await this.props.dispatch(addTodo(data))
            .then(() => {
                Alert.alert(
                    'Tambah Kegiatan',
                    'Berhasil menambah kegiatan!',
                    [
                        { text: 'Ok', onPress: this.props.onClose }
                    ]
                )
            })
            .catch(() => {
                alert('Failed')
            })
    }

    render() {
        let { nama_peserta, kegiatan } = this.state
        let data = {
            nama_peserta,
            kegiatan
        }
        return (
            <View>
                <Modal isVisible={this.props.visible} animationIn='fadeIn' animationOut='flipOutX'>
                    <Card>
                        <CardItem>
                            <Label>Tambah kegiatan</Label>
                            <View style={styles.closeView}>
                                <Button transparent style={styles.closeView} onPress={this.props.onClose}>
                                    <Label style={styles.btnClose}>X</Label>
                                </Button>
                            </View>
                        </CardItem>
                        <CardItem cardBody>
                            <Content>
                                <Form>
                                    <Item style={styles.formDistance}>
                                        <Input placeholder='Nama Peserta' onChangeText={nama_peserta => this.setState({ nama_peserta })} />
                                    </Item>
                                    <Item style={styles.formDistance}>
                                        <Input placeholder='Kegiatan' onChangeText={kegiatan => this.setState({ kegiatan })} />
                                    </Item>
                                </Form>
                                <Button info style={styles.btnSimpan} onPress={() => this.addTodo(data)}>
                                    <Text style={styles.txtSimpan}>Simpan</Text>
                                </Button>
                            </Content>
                        </CardItem>
                    </Card>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoLists: state.todolist.todoLists
    }
}

export default connect(mapStateToProps)(ModalAdd)

const styles = StyleSheet.create({
    btnSimpan: {
        marginTop: 20,
        width: '30%',
        alignSelf: 'flex-end'
    },
    txtSimpan: {
        color: 'white',
        fontSize: 14,
        width: '100%',
        textAlign: 'center'
    },
    formDistance: {
        marginVertical: 10,
    },
    closeView: {
        flex: 1,
        alignSelf: 'flex-end'
    },
    btnClose: {
        textAlign: 'right',
    }
})