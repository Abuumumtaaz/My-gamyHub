import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '2df887b37f3d4cdab380c3cc8bd6fad8'
    }
})