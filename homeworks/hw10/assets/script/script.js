let body = document.getElementById("body");
let outfits = document.getElementsByClassName("outfit");
function hideOutfits() {
	for (let i = 0; i < outfits.length; i++) {
		outfits[i].style.display = "none";
	}
}

// s1 outfit
let s1 = document.getElementById("s1");
let o1 = document.getElementById("o1");

s1.onclick = function() {
	body.style.display = "none";
	hideOutfits();
	o1.style.display = "block";
};

// s2 outfit
let s2 = document.getElementById("s2");
let o2 = document.getElementById("o2");

s2.onclick = function() {
	body.style.display = "none";
	hideOutfits();
	o2.style.display = "block";
};

// s3 outfit
let s3 = document.getElementById("s3");
let o3 = document.getElementById("o3");

s3.onclick = function() {
	body.style.display = "none";
	hideOutfits();
	o3.style.display = "block";
};

// s4 outfit
let s4 = document.getElementById("s4");
let o4 = document.getElementById("o4");

s4.onclick = function() {
	body.style.display = "none";
	hideOutfits();
	o4.style.display = "block";
};

// s5 outfit
let s5 = document.getElementById("s5");
let o5 = document.getElementById("o5");

s5.onclick = function() {
	body.style.display = "none";
	hideOutfits();
	o5.style.display = "block";
};

// strip outfit
let strip = document.getElementById("strip-button");
strip.onclick = function() {
	hideOutfits();
	body.style.display = "block";
};