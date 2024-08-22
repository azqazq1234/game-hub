import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b0de6db5c38045e1b303399f9e88aa04'
  }
})