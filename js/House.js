import { getCharacters } from "./Utils.js";
import Character from "./Character.js";


export default class House {
    
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getImage() {
        return `./images/logo/${this.getName()}.png`;
    }

    displayHouse() {
        
        let section = document.createElement('section');
        section.classList.add('house');

        section.innerHTML += `<img src="./images/logo/${this.getName()}.png" alt="" srcset="" />`

        section.addEventListener('click', () => this.filterByHouse())

        document.querySelector('.houses').appendChild(section);
    }

    async filterByHouse() {
        document.querySelector('.characters').innerHTML = "";
        const characters = await getCharacters(this.getName());
        characters.forEach(c => new Character(c).displayCard());
    }

}