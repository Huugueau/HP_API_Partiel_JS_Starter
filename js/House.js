export default class House {
    
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    displayHouse() {
        
        let section = document.createElement('section');
        section.classList.add('house');

        section.innerHTML += `<img src="./images/logo/${this.getName()}.png" alt="" srcset="" />`


        document.querySelector('.houses').appendChild(section);
    }

}