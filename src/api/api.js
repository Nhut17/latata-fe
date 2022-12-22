import axios from "axios";



const api = axios.create({
    baseURL: 'https://latata-shop-app.onrender.com/',

})

export default api