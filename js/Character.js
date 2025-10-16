import House from "./House.js"

export default class Character {
    
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.gender = data.gender;
        this.eye = data.eyeColour;
        this.hair = data.hairColour;
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


        document.querySelector('.characters').appendChild(section);
    }

}