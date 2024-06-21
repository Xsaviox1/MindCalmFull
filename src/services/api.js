import axios from 'axios'

const api = axios.create({
    baseURL: "http://187.62.76.75:3000"
})

export default api