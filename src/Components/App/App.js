import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from  '../Playlist/Playlist';
import Spotify from '/Users/ianstrong/ReactApps/jamming/src/util/Spotify.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults:[],
      playlistName: 'Sample playlist',
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack(track) {
    let currentPlaylistArray = this.state.playlistTracks.concat(track);
    this.setState({ playlistTracks: currentPlaylistArray });
  }

  removeTrack(track) {
    let currentPlaylistArray = this.state.playlistTracks;
    this.setState({ playlistTracks: currentPlaylistArray.filter(checkTrack => checkTrack.id !== track.id) });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name});
  }

  savePlaylist() {
    const playlistArray = this.state.playlistTracks.map(track => track.uri);
    Spotify.savedPlayList(this.state.playlistName, playlistArray).then(() => {
    this.setState({ playlistTracks: [], playlistName: 'New Playlist'});
    });
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.search} />
            <div className="App-playlist">
              <SearchResults
                searchResults={this.state.searchResults}
                onAdd={this.addTrack}
                onRemove={this.removeTrack} />
                <Playlist
                  name={this.state.playlistName}
                  tracks={this.state.playlistTracks}
                  onRemove={this.removeTrack}
                  onNameChange={this.updatePlaylistName}
                  onSave={this.savePlaylist}
                  />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
