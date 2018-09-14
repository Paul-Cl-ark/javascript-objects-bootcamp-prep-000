var playlist = {
  ledZeppelin: 'Stairway to Heaven'
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
}