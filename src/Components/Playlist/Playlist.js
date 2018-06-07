import React from 'react';
import trackList from '../trackList/TrackList';
import './Playlist.css'

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}
          onChange={this.handleNameChange} />
        <trackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true} />
        <a className="Playlist-save">SAVE TO SPOTIFY
          onClick={this.props.onSave} </a>
      </div>
    )
    }
  }

export default Playlist;
