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
          <img className="logo" src="../../assets/giphy_icon.jpg" />
          <h1>GIPHY </h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            className="search-form"
            onChange={this.update}
            value={this.state.query}
            placeholder="Search for trending Gifs!"
          />
          <button className="search-button">Search</button>
        </form>

      </div>
    );
  }
}

export default SplashSearch;