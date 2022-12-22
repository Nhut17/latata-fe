// import axios from "axios"
// import jwt_decode from 'jwt-decode'



// const refreshToken = async() => {
//     try{
//       const res = await axios.post('/api/v1/refresh-token',{
//         withCredentials: true,
//       })
//       return res.data
//     }
//     catch(e){
//       console.log(e)
//     }
//   }


//  export const createAxios = (currentUser) => {

//     const newInstance = axios.create({
//         baseURL: 'http://localhost:4000'
//     })
//     newInstance.interceptors.request.use(
//         async(config) => {
//           const date = new Date()
//           const decodeToken = jwt_decode(currentUser.accessToken)
//           if(decodeToken.exp <  date.getTime() / 1000)
//           {
//             const data = await refreshToken()
//             const refreshUser = {
//               ...currentUser,
//               token: data.accessToken 
//             };
//             config.headers['token'] = "Bearer " + data.accessToken
//           }
//            return config
//         },
//         (err) => {
//           return Promise.reject(err);
//         }
//       )
// }

