console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "KahaniSuno 2.0 - [Kaifi Khalil]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpeg",
  },
  {
    songName: "Bheegi_Bheegi_Si_Hai",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpeg",
  },
  {
    songName: "Kahani_Suno_Mashup",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpeg",
  },
  {
    songName: "Sia-Unstoppable",
    filePath: "songs/4.mp3",
    coverPath: "covers/9.png",
  },
  {
    songName: "Manike Mage Hite",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpeg",
  },
  {
    songName: "Nasha_X_Let_The_Music Mashup",
    filePath: "songs/6.mp3",
    coverPath: "covers/25.jpg",
  },
  {
    songName: "O Bedardeya-Slowed Version",
    filePath: "songs/7.mp3",
    coverPath: "covers/4.jpeg",
  },
  {
    songName: "PEOPLE_X_MASAKALI",
    filePath: "songs/8.mp3",
    coverPath: "covers/14.jpeg",
  },
  {
    songName: "Yeh_Tune_Kya_Kia",
    filePath: "songs/9.mp3",
    coverPath: "covers/12.jpeg",
  },
  {
    songName: "No_Love",
    filePath: "songs/10.mp3",
    coverPath: "covers/6.jpeg",
  },
  {
    songName: "CLOSER-CHAIN SMOKERS",
    filePath: "songs/11.m4a",
    coverPath: "covers/19.jpg",
  },
  {
    songName: "FADED-ALAN WALKER",
    filePath: "songs/12.mp3",
    coverPath: "covers/22.jpg",
  },
  {
    songName: "Believer-Imagine Dragons",
    filePath: "songs/13.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "Lovely-Billie Eilish ft.khalid",
    filePath: "songs/14.mp3",
    coverPath: "covers/14.jpeg",
  },
  {
    songName: "One Direction-Night Changes",
    filePath: "songs/15.mp3",
    coverPath: "covers/18.jpg",
  },
  {
    songName: "Perfect-By Ed Sheeran",
    filePath: "songs/16.mp3",
    coverPath: "covers/13.jpg",
  },
  {
    songName: "Calm Down-Ed Sheeran,Rema Selena Gomez",
    filePath: "songs/17.mp3",
    coverPath: "covers/26.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 20) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

