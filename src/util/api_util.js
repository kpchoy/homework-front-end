import axios from 'axios';
import apiKey from '../../api-keys';

console.log(apiKey.apikey)

// Search Api endpoint 

export const apiFetchGifs = (query) => {
  return axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: `${apiConfig.apiKey}`,
      q: query
    }
  });
};

// Individual gif 

export const apiFetchGif = (gif_id) => {
  return axios.get(`http://api.giphy.com/v1/gifs/${gif_id}`, {
    params: {
      api_key: `${apiConfig.apiKey}`,
      gif_id
    }
  });
};