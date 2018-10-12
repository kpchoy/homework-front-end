import React from 'react';

class ShowGif extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "----",
      id: "----",
      url: "----",
      importDate: "----",
      rating: "----",
      gifImg: "----",

    }

    this.handleReturn = this.handleReturn.bind(this);
  }

  componentDidMount() {
     
    this.props.fetchGif(this.props.match.params.gif_id)
  }

  componentWillReceiveProps(nextProps) {
     
    this.setState({
      title: nextProps.gif.title,
      id: nextProps.gif.id,
      url: nextProps.gif.url,
      importDate: nextProps.gif.import_datetime,
      rating: nextProps.gif.rating,
      gifImg: nextProps.gif.images.downsized_large.url,
     

    })
  }

  handleReturn() {
    window.history.back();
  }

  renderDisplay() {
     
    if (this.state.gifImg === "----") {
      return(
        <p>Loading Gif Image</p>
      )
    } else {
      return(
        <img className="gif-image" src={this.state.gifImg}/>
      )
    }
  }

  render() {     

    const {gif} = this.props 

    if(gif === undefined) {
      return(
        <p>Loading...</p>
      )
    }

    return(
      <div className="gif-show">
        <h1>Gif Details</h1>
        <div className="gif-items">

          {this.renderDisplay()}
          
          <div className="gif-description">
            <p>Title: {this.state.title}</p>
            <p>Id: {this.state.id}</p>
            <p>Url: {this.state.url}</p>
            <p>Import Date: {this.state.importDate}</p>
            <p>Rating: {this.state.rating}</p>
          </div>
        </div>


        <button className="index-return" onClick={() => this.handleReturn()}>Return to Search</button>
      </div>
    )
  }
}

export default ShowGif;