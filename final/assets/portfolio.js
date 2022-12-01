//unhide function//
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');
}

//designs//
function unhidedesign1() {
	unhideLightbox("design1");
}
document.getElementById("design1").onclick = function() {unhidedesign1()};
function unhidedesign2() {
	unhideLightbox("design2");
}
document.getElementById("design2").onclick = function() {unhidedesign2()};
function unhidedesign3() {
	unhideLightbox("design3");
}
document.getElementById("design4").onclick = function() {unhidedesign3()};
function unhidedesign4() {
	unhideLightbox("design4");
}
document.getElementById("design4").onclick = function() {unhidedesign4()};
function unhidedesign5() {
	unhideLightbox("design5");
}
document.getElementById("design5").onclick = function() {unhidedesign5()};
function unhidedesign6() {
	unhideLightbox("design6");
}
document.getElementById("design6").onclick = function() {unhidedesign6()};

//art//
function unhideart1() {
	unhideLightbox("art1");
}
document.getElementById("art1").onclick = function() {unhideart1()};
function unhideart2() {
	unhideLightbox("art2");
}
document.getElementById("art2").onclick = function() {unhideart2()};
function unhideart3() {
	unhideLightbox("art3");
}
document.getElementById("art3").onclick = function() {unhideart3()};

//photos//
function unhidephoto1() {
	unhideLightbox("photo1");
}
document.getElementById("photo1").onclick = function() {unhidephoto1()};
function unhidephoto2() {
	unhideLightbox("photo2");
}
document.getElementById("photo2").onclick = function() {unhidephoto2()};
function unhidephoto3() {
	unhideLightbox("photo3");
}
document.getElementById("photo3").onclick = function() {unhidephoto3()};
function unhidephoto4() {
	unhideLightbox("photo4");
}
document.getElementById("photo4").onclick = function() {unhidephoto4()};
function unhidephoto5() {
	unhideLightbox("photo5");
}
document.getElementById("photo5").onclick = function() {unhidephoto5()};
function unhidephoto6() {
	unhideLightbox("photo6");
}
document.getElementById("photo6").onclick = function() {unhidephoto6()};
function unhidephoto7() {
	unhideLightbox("photo7");
}
document.getElementById("photo7").onclick = function() {unhidephoto7()};
function unhidephoto8() {
	unhideLightbox("photo8");
}
document.getElementById("photo8").onclick = function() {unhidephoto8()};
function unhidephoto9() {
	unhideLightbox("photo9");
}
document.getElementById("photo9").onclick = function() {unhidephoto9()};

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