import React from 'react';


class IndexGifs extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { query } = this.props.match.params;
    this.props.fetchGifs(query);
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
        />
      );
    }); 

    if(gifs.length === 0) {
      return(
        <p>There were no Gifs matching your search</p>
      )
    }

    return (
      <div>
        <h1>
        Index Gifs  
        </h1>
        <div>
          {gifs}
        </div>
      </div>
    );
  }
}

export default IndexGifs;