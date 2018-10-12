import { connect } from 'react-redux';
import {fetchGif} from '../../actions/gif_actions';
import ShowGif from './show_gif';

const mapStateToProps = (state, ownProps) => {
  const selectedGif = state.gif === undefined ? undefined : state.gif[ownProps.match.params.gif_id];
  return {
    gif: selectedGif
  }
};

const mapDispatchToProps = dispatch => ({
  fetchGif: (gifId) => dispatch(fetchGif(gifId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowGif);