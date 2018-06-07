import React from 'react';
import './TrackList.css';
import Track from '../track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => <Track track={track} key={track.id}/>)}
        </div>
      );
  }
}
export default TrackList;
