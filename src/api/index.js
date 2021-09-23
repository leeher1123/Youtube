import axios from 'axios';

const API = {
  getVideos: (params) => axios({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    method: 'GET',
    params,
  }),
  getCategories: (params) => axios({
    url: 'https://www.googleapis.com/youtube/v3/videoCategories',
    method: 'GET',
    params,
  }),
};

export default API;
