var songs = [
    {
        'name': 'Janiye',
        'source': 'music/Janiye.mp3',
        'cover_pic': 'image/Janiye.jpg',

    },
    {
        'name': 'Kina-Chir',
        'source': 'music/Kina-Chir.mp3',
        'cover_pic': 'image/Kina-Chir.jpg',
    },
    {
        'name': 'Samjhawan',
        'source': 'music/Samjhawan.mp3',
        'cover_pic': 'image/Samjhawan.jpg',
    },
    {
        'name': 'Soch',
        'source': 'music/Soch.mp3',
        'cover_pic': 'image/Soch.jpg',
    },
    {
        'name': 'Tum Se Hi',
        'source': 'music/Tum Se Hi.mp3',
        'cover_pic': 'image/Tum Se Hi.jpg',
    },
];

const audio = document.querySelector('audio');
const cdimage = document.querySelector('.cd').querySelector('img');
const playbut = document.querySelector('.play');
const prevbut = document.querySelector('.prev');
const nextbut = document.querySelector('.next');
const songname = document.querySelector('.songname')
var songindex = 0;


const playing = () => {
    audio.play();
    const list = cdimage.classList
    if (list != 'active') {
        audio.play();
        list.add('active');
        playbut.querySelector('i').classList.remove('fa-play');
        playbut.querySelector('i').classList.add('fa-pause');
    }
    else {
        audio.pause();
        list.remove('active');
        playbut.querySelector('i').classList.remove('fa-pause');
        playbut.querySelector('i').classList.add('fa-play');
    }
}

const setSong = (song) => {
    cdimage.src = song.cover_pic;
    audio.src = song.source;
    songname.innerHTML = song.name;
    audio.play();
    const list = cdimage.classList
    list.add('active');
    playbut.querySelector('i').classList.remove('fa-play');
    playbut.querySelector('i').classList.add('fa-pause');
}



playbut.addEventListener('click', playing)

nextbut.addEventListener('click', () => {
    songindex = (songindex + 1) % songs.length;
    setSong(songs[songindex]);
  
})
prevbut.addEventListener('click', () => {
    songindex = (songindex - 1 + songs.length) % songs.length;
    setSong(songs[songindex]);
  

})




console.log(songs.length)