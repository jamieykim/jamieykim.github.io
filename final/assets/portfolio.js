//unhide function//
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');
}

//designs//
function unhidedesign1() {
	unhideLightbox("design1");
}
document.getElementById("d1").onclick = function() {unhidedesign1()};
function unhidedesign2() {
	unhideLightbox("design2");
}
document.getElementById("d2").onclick = function() {unhidedesign2()};
function unhidedesign3() {
	unhideLightbox("design3");
}
document.getElementById("d3").onclick = function() {unhidedesign3()};
function unhidedesign4() {
	unhideLightbox("design4");
}
document.getElementById("d4").onclick = function() {unhidedesign4()};
function unhidedesign5() {
	unhideLightbox("design5");
}
document.getElementById("d5").onclick = function() {unhidedesign5()};
function unhidedesign6() {
	unhideLightbox("design6");
}
document.getElementById("d6").onclick = function() {unhidedesign6()};

//art//
function unhideart1() {
	unhideLightbox("art1");
}
document.getElementById("a1").onclick = function() {unhideart1()};
function unhideart2() {
	unhideLightbox("art2");
}
document.getElementById("a2").onclick = function() {unhideart2()};
function unhideart3() {
	unhideLightbox("art3");
}
document.getElementById("a3").onclick = function() {unhideart3()};

//photos//
function unhidephoto1() {
	unhideLightbox("photo1");
}
document.getElementById("p1").onclick = function() {unhidephoto1()};
function unhidephoto2() {
	unhideLightbox("photo2");
}
document.getElementById("p2").onclick = function() {unhidephoto2()};
function unhidephoto3() {
	unhideLightbox("photo3");
}
document.getElementById("p3").onclick = function() {unhidephoto3()};
function unhidephoto4() {
	unhideLightbox("photo4");
}
document.getElementById("p4").onclick = function() {unhidephoto4()};
function unhidephoto5() {
	unhideLightbox("photo5");
}
document.getElementById("p5").onclick = function() {unhidephoto5()};
function unhidephoto6() {
	unhideLightbox("photo6");
}
document.getElementById("p6").onclick = function() {unhidephoto6()};
function unhidephoto7() {
	unhideLightbox("photo7");
}
document.getElementById("p7").onclick = function() {unhidephoto7()};
function unhidephoto8() {
	unhideLightbox("photo8");
}
document.getElementById("p8").onclick = function() {unhidephoto8()};
function unhidephoto9() {
	unhideLightbox("photo9");
}
document.getElementById("p9").onclick = function() {unhidephoto9()};

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