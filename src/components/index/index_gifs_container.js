import { connect } from 'react-redux';
import {fetchGifs} from '../../actions/gif_actions';
import IndexGifs from './index_gifs';

const mapStateToProps = state => {

  return {
    gifs: state.gifs 
  }
};

const mapDispatchToProps = dispatch => ({
  fetchGifs: (query) => dispatch(fetchGifs(query))

});

export default connect(mapStateToProps, mapDispatchToProps)(IndexGifs);