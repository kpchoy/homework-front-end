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
      gifImg: "----"
    }
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
      gifImg: nextProps.gif.images.downsized_large.url
    })
  }

  render() {     

    const {gif} = this.props 

    if(gif === undefined) {
      return(
        <p>Loading...</p>
      )
    }

    

    return(
      <div>


        <h1>Selected Gif</h1>
        <p>title: {this.state.title}</p>
        <p>id: {this.state.id}</p>
        <p>url: {this.state.url}</p>
        <p>importDate: {this.state.importDate}</p>
        <p>rating: {this.state.rating}</p>


      </div>
    )
  }
}

export default ShowGif;