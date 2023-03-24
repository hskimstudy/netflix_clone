import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "98026c1a92106ab54507e982fc14e62d",
    language: "ko-KR"
  },
})

export default instance;