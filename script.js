function createGalery () {
    const container = document.querySelector("#galery .container");
    let row = document.createElement("div");
    row.classList.add("row");

    fetch("data/galery.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="./images/${item.image}">
            `;
            row.appendChild(card);

            if ((index + 1) % 4 == 0 || index == data.length - 1) {
                container.appendChild(row);
                row = document.createElement("div");
                row.classList.add("row");
            }
        });
    });
}

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


createGalery()