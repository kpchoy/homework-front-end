import axios from 'axios';
import * as apiKey from '../../api-keys';


// Search Api endpoint

export const apiFetchGifs = (query) => {
   
  return axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: `${apiKey.giphKey}`,
      q: query,

    }
  });
};

// Individual gif 

export const apiFetchGif = (gif_id) => {
  return axios.get(`http://api.giphy.com/v1/gifs/${gif_id}`, {
    params: {
      api_key: `${apiKey.giphKey}`,
      gif_id
    }
  });
};