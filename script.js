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

createGalery()