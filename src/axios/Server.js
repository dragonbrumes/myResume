/**
 ** Npm imports
 */
import axios from "axios"

/*   headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept'
  }
 */
const baseConfig = {
  baseURL: "http://localhost:3000",
  withCredentials: false,
  mode: "no-cors"
}

// const options = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Headers":
//       "Origin, X-Requested-With, Content-Type, Accept",
//     Authorization: token
//   }
// }

class Server {
  constructor(options = {}) {
    this.config = {
      ...baseConfig,
      ...options
    }

    this.call = axios.create({
      ...this.config
    })
  }
}

export default Server
