//unhide function//
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');
}

//movies//
function unhidemovie1() {
	unhideLightbox("movie1");
}
document.getElementById("m1").onclick = function() {unhidemovie1()};
function unhidemovie2() {
	unhideLightbox("movie2");
}
document.getElementById("m2").onclick = function() {unhidemovie2()};
function unhidemovie3() {
	unhideLightbox("movie3");
}
document.getElementById("m3").onclick = function() {unhidemovie3()};
function unhidemovie4() {
	unhideLightbox("movie4");
}
document.getElementById("m4").onclick = function() {unhidemovie4()};
function unhidemovie5() {
	unhideLightbox("movie5");
}
document.getElementById("m5").onclick = function() {unhidemovie5()};
function unhidemovie6() {
	unhideLightbox("movie6");
}
document.getElementById("m6").onclick = function() {unhidemovie6()};

//shows//
function unhideshow1() {
	unhideLightbox("show1");
}
document.getElementById("s1").onclick = function() {unhideshow1()};
function unhideshow2() {
	unhideLightbox("show2");
}
document.getElementById("s2").onclick = function() {unhideshow2()};
function unhideshow3() {
	unhideLightbox("show3");
}
document.getElementById("s3").onclick = function() {unhideshow3()};
function unhideshow4() {
	unhideLightbox("show4");
}
document.getElementById("s4").onclick = function() {unhideshow4()};
function unhideshow5() {
	unhideLightbox("show5");
}
document.getElementById("s5").onclick = function() {unhideshow5()};
function unhideshow6() {
	unhideLightbox("show6");
}
document.getElementById("s6").onclick = function() {unhideshow6()};

//close boxes//
function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden');
}
function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');
	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}
document.getElementById('lightbox-overlay').onclick = function() {closeAllLightboxes()};