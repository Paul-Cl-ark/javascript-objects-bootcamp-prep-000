var playlist = {
  ledZeppelin: 'Stairway to Heaven'
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(object, artistName) {
  delete object.artistName;
  return object
}