import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          addTrack={this.props.addTrack}
          action='+'
          tracks={this.props.SearchResults} />
      </div>
        );
    }
  }
  export default SearchResults;

