import React from 'react';
import 'TrackList';
import 'Playlist.css'

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <!-- Add a TrackList component -->
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
    }
  }

export default Playlist;