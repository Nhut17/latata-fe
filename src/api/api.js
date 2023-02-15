import axios from "axios";



const api = axios.create({
    baseURL: 'https://latata-shop-app.onrender.com',
    // baseURL: 'https://localhost:4000',
     

})

export default api