class Audio {
  #pause = true;

  #volume = 100;

  #curPos = 0;

  #time = 0;

  #stopTime = 0;
  #trackProgressContainer;
  #audioElem;

  #musicList = [];

  #nMusics = 0;
  get TrackProgressContainer() {
    return this.#trackProgressContainer;
  }
  set TrackProgressContainer(value) {
    this.#trackProgressContainer = value;
  }
  get Volume() {
    return this.#volume;
  }
  set Volume(value) {
    this.#volume = value;
  }
  get CurPos() {
    return this.#curPos;
  }
  set CurPos(value) {
    this.#curPos = value;
  }
  get AudioElem() {
    return this.#audioElem;
  }
  set AudioElem(value) {
    this.#audioElem = value;
  }
  get StopTime() {
    return this.#stopTime;
  }
  set StopTime(value) {
    this.#stopTime = value;
  }
  get Time() {
    return this.#time;
  }
  set Time(value) {
    this.#time = value;
  }
  get Pause() {
    return this.#pause;
  }
  getCurrMusicData() {
    return this.#musicList[this.#curPos];
  }
  addMusic(name, author, file, img) {
    let musicData = new MockData(name, author, file, img);
    this.#musicList[this.#nMusics] = musicData;
    this.#nMusics++;
  }
  next() {
    if (this.#curPos < this.#nMusics) {
      this.#curPos++;
    } else {
      this.#curPos = 0;
    }
    this.AudioElem.pause();
    this.AudioElem.src = this.getCurrMusicData().File;
    this.AudioElem.load();

    this.#time = 0;
  }
  prev() {
    if (this.#curPos > 0) {
      this.#curPos--;
    } else {
      this.#curPos = this.#nMusics - 1;
    }
    this.AudioElem.pause();
    this.AudioElem.src = this.getCurrMusicData().File;
    this.AudioElem.load();

    this.#time = 0;
  }
  pauseControler() {
    this.#pause = !this.#pause;
    if (this.#pause) {
      this.AudioElem.pause();
    } else {
      
      this.AudioElem.play();
    }
  }
  audioController(value) {
    this.Volume = value;
    this.AudioElem.volume = this.Volume / 100;
  }
  constructor(audioelem, trackProgressContainer) {
    this.AudioElem = audioelem;
    this.TrackProgressContainer = trackProgressContainer;
  }
}
