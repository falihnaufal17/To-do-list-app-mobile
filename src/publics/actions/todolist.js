import axios from 'axios'
import url from '../API'

export const getAllName = () => {
    return {
        type: 'GET_NAME',
        payload: axios.get(`${url}/todo`)
    }
}

export const getTodoByName = (nama_peserta) => {
    return {
        type: 'GET_BYNAME',
        payload: axios.get(`${url}/todo/${nama_peserta}`)
    }
}

export const addTodo = (data) => {
    return {
        type: 'POST_TODO',
        payload: axios.post(`${url}/todo`, data)
    }
}