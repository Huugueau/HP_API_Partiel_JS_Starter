import House from "./House.js"

export default class Character {
    
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.gender = data.gender;
        this.eye = data.eyeColour;
        this.hair = data.hairColour;
        this.birth = data.dateOfBirth;
        this.patronus = data.patronus;
        this.house = new House(data.house);
        this.image = data.image;
        this.actor = data.actor;
    }

    displayCard() {


        let section = document.createElement('section');

        


        section.innerHTML += 
            "<div class='perso'>" +
                "<figure class='perso__left'>" +
                  `<img class='${this.house.getName().toLowerCase()}' src='${this.image}' alt='' srcset='' />` +
                  `<figcaption>${this.name}</figcaption>` +
                "</figure>" +
            "</div>";

        section.addEventListener("click", () => {
            window.open(`./details.html?id=${this.id}`, "_blank");
        })

        document.querySelector('.characters').appendChild(section);
    }

    displayDetails() {

        const attributes = document.querySelector('.attributes');
        attributes.innerHTML = 
            `<li><span class="attr">${this.gender}</span></li>` +
            `<li><span class="attr">${this.eye}</span></li>` +
            `<li><span class="attr">${this.hair}</span></li>` +
            `<li><span class="attr">${this.birth}</span></li>` +
            `<li><span class="attr">${this.patronus}</span></li>`;

        const actor = document.querySelector('.actor');
        actor.innerHTML = this.actor;

        const name = document.querySelector('.name');
        name.innerHTML = this.name;

        const img = document.querySelector('.perso_img');
        img.src = this.image;

        const logo = document.querySelector('.house__perso img');
        logo.src = this.house.getImage();
    }

}