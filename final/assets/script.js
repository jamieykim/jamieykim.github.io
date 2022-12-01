//image carousel
function gallery() {
    const path = "assets/img/"; 
    let imageArrays = [
    "portfolio/design/crunchy.png",
    "portfolio/design/c4c.jpg",
    "portfolio/design/hex.png",
    "portfolio/design/adobe.png",
    "portfolio/design/photoshop.png",
    "portfolio/design/gypsys.png",
    "portfolio/art/spirited.jpg",
    "portfolio/art/howl.jpg",
    "portfolio/art/ramen.jpg",
    "portfolio/photos/01.JPG",
    "portfolio/photos/02.JPG",
    "portfolio/photos/03.JPG",
    "portfolio/photos/04.JPG",
    "portfolio/photos/05.JPG",
    "portfolio/photos/06.JPG",
    "portfolio/photos/07.JPG",
    "portfolio/photos/08.JPG",
    "portfolio/photos/09.JPG",
    "favorites/movies/lalaland.jpg",
    "favorites/movies/everything.jpg",
    "favorites/movies/minari.jpeg",
    "favorites/movies/hmc.jpg",
    "favorites/movies/wind.jpg",
    "favorites/movies/poppy.jpg",
    "favorites/shows/aot.jpg",
    "favorites/shows/fruba.jpg",
    "favorites/shows/loveiswar.jpeg",
    "favorites/shows/2521.jpeg",
    "favorites/shows/crashlanding.jpg",
    "favorites/shows/hometown.jpeg",
    "favorites/music/artists/hisaishi.jpeg",
    "favorites/music/artists/bts.jpeg",
    "favorites/music/artists/nct.jpeg",
    "favorites/music/songs/endingsong.jpeg",
    "favorites/music/songs/tryagain.jpg",
    "favorites/music/songs/she.jpeg",
    "favorites/music/playlists/fairytale.JPG",
    "favorites/music/playlists/love.JPG",
    "favorites/music/playlists/coffeeshop.JPG",];

    let carousel = document.querySelectorAll(".gallery-wrapper > img");

    for(let i = 0; i < 5; i++){
    let imgIndex = Math.floor(Math.random() * imageArrays.length);
    carousel[i].src = path + imageArrays[imgIndex];
    console.log(path+imageArrays[imgIndex]);
    imageArrays.splice(imgIndex, 1)
    }
}

window.setInterval(gallery, 5000);