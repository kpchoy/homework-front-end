import {merge} from 'lodash';

import {RECEIVE_ALL_GIFS, RECEIVE_GIF} from '../actions/gif_actions';

const gifReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_GIFS:
      return merge({}, state, {gifs:action.gifs})
    case RECEIVE_GIF:
      return {gif: action.gif};
    default:
      return state;
  }
}

export default gifReducer;