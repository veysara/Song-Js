const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


const songs = [
	{
		name: "1",
		title: "មានអ្នកថែរឺនៅ",
		artist: "ច្រៀងដោយ៖ Adda Angel",
	},
	{
		name: "2",
		title: "ឈឺ​!",
		artist: "ច្រៀងដោយ៖ Kanhchna",
	},
	{
		name: "3",
		title: "ច្រណែនគេដែលមិនមែនជាខ្ញុំ",
		artist: "ច្រៀងដោយ៖ Run Syra",
	},
	{
		name: "4",
		title: "គ្រាប់ពេជ្រ",
		artist: "ច្រៀងដោយ៖ Add Angel",
	},
	{
		name: "5",
		title: "ងប់ងល់",
		artist: "ច្រៀងដោយ៖ Ela La",
	},
	{
		name: "6",
		title: "ខួរក្បាល",
		artist: "ច្រៀងដោយ៖ Moni Rin",
	},
	{
		name: "7",
		title: "អតីត",
		artist: "ច្រៀងដោយ៖ Pao Ploy",
	},
	{
		name: "8",
		title: "សម្បថនិស្ស័យ",
		artist: "ច្រៀងដោយ៖ Chen trophy",
	},
	{
		name: "9",
		title: "ខកខាន",
		artist: "ច្រៀងដោយ៖ Suly Pheng",
	},
	{
		name: "10",
		title: "កង់សាគួរ",
		artist: "ច្រៀងដោយ៖ Korng Sakour",
	}
];


let isPlaying = false;

// for play function
const playMusic = () => {
	isPlaying = true;
	music.play();
	play.classList.replace("fa-play", "fa-pause");
	img.classList.add("anime");
};


// for pause function
const pauseMusic = () => {
	isPlaying = false;
	music.pause();
	play.classList.replace("fa-pause", "fa-play");
	img.classList.remove("anime");
};


play.addEventListener("click", () => {
	isPlaying ? pauseMusic() : playMusic();
});


// changing the music data
const loadSong = (songs) => {
	title.textContent = songs.title;
	artist.textContent = songs.artist;
	music.src = "music/" + songs.name + ".mp3";
	img.src = "images/" + songs.name + ".jpg";
};


songIndex = 0;
const nextSong = () =>{
	songIndex = (songIndex + 1) % songs.length;
	localStorage.setItem("songIndex", songIndex);

	loadSong(songs[songIndex]);
	playMusic();
};


const prevSong = () =>{
	songIndex = (songIndex - 1 + songs.length) % songs.length;

	loadSong(songs[songIndex]);
	playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);


function storeIndex () {
	if (JSON.parse(localStorage.getItem("songIndex")) !== null ) {
        songIndex = JSON.parse(localStorage.getItem("songIndex"));
	}
}

storeIndex ();
loadSong(songs[songIndex]);	





