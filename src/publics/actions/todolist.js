import axios from 'axios'
import url from '../API'

export const getAllName = () => {
    return {
        type: 'GET_NAME',
        payload: axios.get(`${url}/todo`)
    }
}