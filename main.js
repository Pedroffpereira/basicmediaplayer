const audioelem = document.querySelector("audio");

const btPlay = document.querySelector("#btPlay");

const btPause = document.querySelector("#btPause");

const btSoundOff = document.querySelector("#btSoundOff");

const btNext = document.querySelector("#btNext");

const btPrevious = document.querySelector("#btPrevious");

const btSoundOn = document.querySelector("#btSoundOn");

const authorNameElem = document.querySelector(".audio-info h1");
const musicNameElem = document.querySelector(".audio-info p");
const musicImgElem = document.querySelector("#imgAudio");

const trackProgressContainer = document.querySelector(
  "#trackProgressContainer"
);

const soundVolumeContainer = document.querySelector("#soundVolumeContainer");

let audioplayer = new Audio(audioelem, trackProgressContainer);

audioplayer.addMusic(
  "acousticbreeze",
  "author2",
  "./assets/audio/bensound-acousticbreeze.mp3",
  "./assets/images/acousticbreeze.jpg"
);

audioplayer.addMusic(
  "anewbeginning",
  "author2",
  "./assets/audio/bensound-anewbeginning.mp3",
  "./assets/images/anewbeginning.jpg"
);

audioplayer.addMusic(
  "creativeminds",
  "author3",
  "./assets/audio/bensound-creativeminds.mp3",
  "./assets/images/creativeminds.jpg"
);

audioplayer.addMusic(
  "goinghigher",
  "author4",
  "./assets/audio/bensound-goinghigher.mp3",
  "./assets/images/goinghigher.jpg"
);

audioplayer.addMusic(
  "happyrock",
  "author5",
  "./assets/audio/bensound-happyrock.mp3",
  "./assets/images/happyrock.jpg"
);

audioplayer.addMusic(
  "jazzyfrenchy",
  "author6",
  "./assets/audio/bensound-jazzyfrenchy.mp3",
  "./assets/images/jazzyfrenchy.jpg"
);

audioplayer.addMusic(
  "littleidea",
  "author7",
  "./assets/audio/bensound-littleidea.mp3",
  "./assets/images/littleidea.jpg"
);

audioplayer.addMusic(
  "memories",
  "author8",
  "./assets/audio/bensound-memories.mp3",
  "./assets/images/memories.jpg"
);

audioplayer.addMusic(
  "ukulele",
  "author9",
  "./assets/audio/bensound-ukulele.mp3",
  "./assets/images/ukulele.jpg"
);
function loadMusicinfo() {
  authorNameElem.textContent = audioplayer.getCurrMusicData().Author;
  musicNameElem.textContent = audioplayer.getCurrMusicData().Name;
  musicImgElem.style.background =
    "url(" + audioplayer.getCurrMusicData().Image + ")";
}
loadMusicinfo();
btPlay.addEventListener("click", function () {
  btPause.classList.remove("hidden")
  musicImgElem.classList.remove('paused')
  btPlay.classList.add("hidden")
  audioplayer.pauseControler();
  clock();
});

btPause.addEventListener("click", function () {
  btPause.classList.add("hidden")
  btPlay.classList.remove("hidden")
  
  musicImgElem.classList.add('paused')
  audioplayer.pauseControler();
  clock();
});

btSoundOff.addEventListener("click", function () {
  btSoundOff.classList.add("hidden")
  
  btSoundOn.classList.remove("hidden")
  trackSound(soundVolumeContainer, 0);
});

audioplayer.audioController(trackSound(soundVolumeContainer, soundVolumeContainer.offsetWidth));
btSoundOn.addEventListener("click", function () {
  
  btSoundOff.classList.remove("hidden")
  
  btSoundOn.classList.add("hidden")
  trackSound(soundVolumeContainer, soundVolumeContainer.offsetWidth);
});
btPrevious.addEventListener("click", function () {
  audioplayer.prev();
  loadMusicinfo();
});
btNext.addEventListener("click", function () {
  audioplayer.next();
  loadMusicinfo();
});
trackProgressContainer.addEventListener("click", function (event) {
  let progress = (event.offsetX / this.offsetWidth) * 100;
  this.querySelector(".progressbar-overlay").style.width = progress + "%";

  audioplayer.Time = progress * audioelem.duration;

  audioelem.currentTime = progress;
});

function clock() {
  console.log(audioplayer.Time);
  if (!audioplayer.Pause) {
    if (audioplayer.Time < audioelem.duration) {
      audioplayer.Time++;
      setTimeout(clock, 1000);
    } else {
      audioplayer.next();

      loadMusicinfo();
      setTimeout(clock, 1000);
    }
    trackProgressContainer.querySelector(".progressbar-overlay").style.width =
      (audioplayer.Time / audioelem.duration) * 100 + "%";
  }
}

soundVolumeContainer.addEventListener("click", function (event) {
  audioplayer.audioController(trackSound(this, event.offsetX));
});
function trackSound(obj, value) {
  let progress = (value / obj.offsetWidth) * 100;
  obj.querySelector(".progressbar-overlay").style.width = progress + "%";
  return progress;
}
