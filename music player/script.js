let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let slider = document.querySelector('#duration');
let track_image = document.querySelector('#track_img');

let timer;
let autoplay=1;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let All_songs = [
    {
        Name:"First song",
        path:"music/Kan peasum varthaigal-7 g Rainbow colony.mp3",
        img: "img/u1.webp",
        artist :`"Yuvan shankar Raja /U1 drgus"`,
    }, 
    
    {
        Name:"second song",
        path:"music/Enakenna Yaarum Illaye-320Kbps - (worldtunez.com).mp3",
        img: "img/ani.webp",
        artist:`"Anirudh the rockstar"`,
    },   

    {
        Name:"third song",
        path:"music/03 Yethi Yethi, Benny Dayal, Naresh Iyer, Solar Sai.mp3",
        img: "img/haris.jpg",
        artist:`"melodey king harris jayaraj "`,
    },   
];

function load_track(index_no){
    clearInterval(timer);
    reset_slider();

    track.src = All_songs[index_no].path;
    title.innerHTML = All_songs[index_no].Name;
    track_image.src = All_songs[index_no].img;
    artist.innerHTML = All_songs[index_no].artist;

    timer = setInterval(range_slider , 1000);
    total.innerHTML = All_songs.length;
    present.innerHTML = index_no + 1;

}
load_track(index_no);

function justplay(){
    if(playing_song==false){
        playsong();
    }
    else{
        pausesong();
    }
}

function reset_slider(){
    slider.value = 0;
}

function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause-circle"></i>'
}

function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play-circle"></i>'
}

function next_song(){
    if(index_no< All_songs.length -1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playsong();

    }
}

function previous_song(){
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = All_songs.length;
        load_track(index_no);
        playsong();
        
    }
}

function change_duration(){
    slider_position = track.duration * (slider.value /100);
    track.currentTime = slider_position;
}