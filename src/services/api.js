import axios from 'axios'

const BASE_URL = 'https://randomuser.me/api/'

const getData = async() => {
    const response = await axios.get(BASE_URL)
    return response.data
}

export {getData}