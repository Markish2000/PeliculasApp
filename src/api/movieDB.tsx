import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a5acfd76f4aa397531fc1c5bf3f920ed',
    language: 'es-ES',
  },
});

export default movieDB;
