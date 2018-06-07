import React from 'react';
import './TrackList.css';
import Track from '../track/Track';

class TrackList extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
  render() {
    let tracks = this.props.tracks ? this.props.tracks : [];
    return (
      <div className="TrackList">
        {tracks.map(track => {
          console.log(track);
          <Track track={track} />}
        )}
      </div>
    );
  }
}

export default TrackList;
