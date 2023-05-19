//This code represents musicPlayer with logic of prototypes.
function MusicPlayer() {
  this.playButton = document.getElementById('play-button');
  this.stopButton = document.getElementById('stop-button');
  this.musicPlayer = document.getElementById('music-player');
  this.isPlaying = false;
  this.init();
}

MusicPlayer.prototype.init = function() {
  this.playButton.addEventListener("click", this.togglePlay.bind(this));
  this.stopButton.addEventListener("click", this.togglePlay.bind(this));
};

MusicPlayer.prototype.togglePlay = function() {
  this.isPlaying = !this.isPlaying;
  
  if (this.isPlaying) {
    this.musicPlayer.play();
    this.playButton.style.display = "none";
    this.stopButton.style.display = "inline-block";s
  } else {
    this.musicPlayer.pause();
    this.playButton.style.display = "inline-block";
    this.stopButton.style.display = "none";
  }
};

const myMusicPlayer = new MusicPlayer();

  