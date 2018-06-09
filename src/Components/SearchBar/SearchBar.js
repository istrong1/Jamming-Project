import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term : ''};
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange(e) {
    const term = e.target.value;
    this.setState({ term: term});
  }

  handleSearch(e) {
    this.props.searchSpotify(this.state.term);
  }

  handleKeyPress(e) {
    if(e.key == 'Enter'){
      this.props.searchSpotify(this.state.term);
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} type="text" id="one" onKeyPress={this.handleKeyPress} placeholder="Enter A Song Title" />
        <a onClick={this.handleSearch}>SEARCH</a>
      </div>
    );
  }
}
export default SearchBar;

