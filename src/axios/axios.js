import axios from "axios";

export default axios.create({
    baseURL: 'https://eshop-deve.herokuapp.com/api/v2'
})