import React from 'react';


class IndexGifs extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this); 
    this.handleSelectGif = this.handleSelectGif.bind(this);
  }

  componentDidMount() {
    const { query } = this.props.match.params;
    this.props.fetchGifs(query);
  }

  handleSearch() {

    this.props.history.push('/');
  }

  handleSelectGif(e) {
    e.preventDefault();
    this.props.history.push(`/show/${e.target.id}`);
  }

  render() {

    // need to wait for all the gifs to come back from api 

    if(this.props.gifs === undefined) {
      return(
        <p>Loading...</p>
      )
    }

    // will run once api comes back, rerenders page, for state will change
    let gifs = Object.values(this.props.gifs).map(gif => {
      return (
        <img key={gif.id}
        className="gif-item"
        src={gif.images.fixed_width.webp}
        id={gif.id}
        onClick={this.handleSelectGif}
        />
      );

    }); 

    if(gifs.length === 0) {
      return(
        <p>There were no Gifs matching your search</p>
      )
    }

    let topic = this.props.match.params.query; 

    return (
      <div className="index">
        <h1>{topic} Gifs</h1>

        <button className="search-again" onClick={() => this.handleSearch()}>Search for more Gifs!</button>

        <div className="index-gifs">
          {gifs}
        </div>
      </div>
    );
  }
}

export default IndexGifs;