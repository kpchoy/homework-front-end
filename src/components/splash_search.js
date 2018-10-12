import React from 'react';

class SplashSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleSubmit(e) {

    e.preventDefault();
    this.props.history.push(`/search/${this.state.query}`);
  }

  update(e) {
    this.setState({query: e.target.value})
  }
  
  render() {
    return (
      <div className="splash">
        <div className="splash-header">
          <img className="logo" src="https://media.giphy.com/media/YJBNjrvG5Ctmo/giphy.gif" />
          <h1>Search For Trending Gifs!</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            className="search-form"
            onChange={this.update}
            value={this.state.query}
            placeholder="Search!"
          />
          <button className="search-button">Search</button>
        </form>

      </div>
    );
  }
}

export default SplashSearch;