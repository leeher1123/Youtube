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
  getRelatedVideos: (params) => axios({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    params,
  }),
  getComments: (params) => axios({
    url: 'https://www.googleapis.com/youtube/v3/commentThreads',
    method: 'GET',
    params,
  }),
};

export default API;
