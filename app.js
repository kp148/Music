const music = new Audio("audio/1.mp3");

const songs = [
  {
    id: 1,
    songName: ` Hanuman Chalisa <br>
              <div class="subtitle">Gulsan kumar</div>`,
    poster: "images/1.jpg",
  },

  {
    id: 2,
    songName: `MY CONSCIENCE <br>
              <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },

  {
    id: 3,
    songName: `ALL GIRL ARE THE SAME <br>
              <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },

  {
    id: 4,
    songName: `295 SIDHU MOOSEWALA<br />
              <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 5,
    songName: `AMPLIFIER<br />
              <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 6,
    songName: `ARAMBH HAIN PRACHAND<br />
              <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 7,
    songName: `CHEQUE<br />
              <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 8,
    songName: `CHRIS BROWN<br />
              <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 9,
    songName: `KEROSENE <br />
              <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 10,
    songName: `ON MY OWN <br />
              <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 11,
    songName: `SNAP<br />
                <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 12,
    songName: `DRILL'S<br />
                <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 13,
    songName: `SHAHIBA <br />
                <div class="subtitle">Khandelwal🤗Priyansh🤗</div>>`,
    poster: "images/2.jpg",
  },
  {
    id: 14,
    songName: `COLDPLAY <br />
                <div class="subtitle">Khandelwal🤗Priyansh🤗</div>>`,
    poster: "images/2.jpg",
  },
  {
    id: 15,
    songName: `FELIX THE 1st <br />
                <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 16,
    songName: `FIFTH HARMONY <br />
                <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 17,
    songName: `GOLD MARCURY <br />
                <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 18,
    songName: `BABY I'M YOUR'S <br />
                <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 19,
    songName: `GUNNA <br />
                <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
  {
    id: 20,
    songName: `METRO BHOOMIN <br />
                <div class="subtitle">Khandelwal🤗Priyansh🤗</div>`,
    poster: "images/2.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")[0]).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
};

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgb(39, 231, 227, .0)";
  });
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    // console.log(index);
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active1");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(39, 231, 227, 0.1)";
    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  // console.log(music_curr);

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  // console.log(min1);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1} :${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  currentStart.innerText = `${min2} :${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  // console.log(seek.value);
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");
























let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let Artists_bx = document.getElementsByClassName("Artists_bx")[0];

pop_art_right.addEventListener("click", () => {
  Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener("click", () => {
  Artists_bx.scrollLeft -= 330;
});
