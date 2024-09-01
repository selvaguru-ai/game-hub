import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'e1bb4322ad3640e389259e7ea95e8e56'
    }
})