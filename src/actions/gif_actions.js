import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_GIFS = 'RECEIVE_ALL_GIFS';
export const RECEIVE_GIF = 'RECEIVE_GIF';

const receiveAllGifs = (gifs) => ({
  type: RECEIVE_ALL_GIFS,
  gifs
})

const receiveGif = (gif) => ({
  type: RECEIVE_GIF,
  gif
});

export const fetchGifs = (query) => dispatch => {
  // array of gifs 
  // conver array to obj for faster read time later

  return APIUtil.apiFetchGifs(query).then( response => {

    const dataObj = {};
    response.data.data.forEach( gif => dataObj[gif.id] = gif );
    return dispatch(receiveAllGifs(dataObj));
  });
};

export const fetchGif = gif_id => dispatch => {
  return APIUtil.apiFetchGif(gif_id).then( response => {
    const gifObj = response.data.data;
    const dataObj = {[gifObj.id]: gifObj};
    return dispatch(receiveGif(dataObj));
  })
}



