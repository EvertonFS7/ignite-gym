import { AppError } from './../utils/AppError'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://54.232.42.243:3333',
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    } else {
      return Promise.reject(new AppError(error))
    }
  },
)

// .request.use(
//   (config) => {
//     console.log('DADOS ENVIADOS =>', config)
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )
