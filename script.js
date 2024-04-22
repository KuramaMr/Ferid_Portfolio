/*** Test Script ***/

const slides = [
    {
        image: "3groupeSMV.jpg"
    },
    {
        image: "3groupeSMV2.jpg"
    }
]

let etape = 0;

let nbr__img = slides.length;

let precedent = document.querySelector('.bx-chevron-left');
let suivant = document.querySelector('.bx-chevron-right');
let image = document.getElementById("slide");

function showSlide() {
    image.src = "./images/" + slides[etape].image;
}
/* Call function to move arrowleft */
precedent.addEventListener("click", function () {
	if (etape == 0) {
		etape = nbr__img - 1;
	}
	else {
		etape--;
	}showSlide();
});

/* Call function to move arrowRight */	
suivant.addEventListener("click", function () {
	if (etape === nbr__img - 1) {
		etape = 0;
	} else {
    etape++;
	}showSlide();
});




let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('click', (e) => {
    if (!navbar.classList.contains('active') || e.target === menuIcon || navbar.contains(e.target)) {
        return;
    }

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});