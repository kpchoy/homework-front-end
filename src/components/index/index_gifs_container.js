import { connect } from 'react-redux';
import {fetchGifs, fetchGif} from '../../actions/gif_actions';
import IndexGifs from './index_gifs';

const mapStateToProps = state => ({
  gifs: state.gifs 
});

const mapDispatchToProps = dispatch => ({
  fetchGifs: (query) => dispatch(fetchGifs(query)),
  fetchGif: (gifId) => dispatch(fetchGif(gifId))
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexGifs);