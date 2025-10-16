import Character from "./Character.js";
import House from "./House.js";

export async function getCharacters(house) {
   let response = await (house != undefined ? fetch(`https://hp-api.onrender.com/api/characters/house/${house}`) : fetch("https://hp-api.onrender.com/api/characters"));
   let data = response.json();
   return data;
}

export async function getCharacter(id) {
    const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
    let data = response.json();
    console.log(data);
    return data;
}

export function displayHouses() {
    const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
    houses.forEach(house => new House(house).displayHouse())
}

export function displayFilters(selectedFilters) {

    const aliveButton = document.createElement('button');
    const deadButton = document.createElement('button');
    const ageButton = document.createElement('button');

    aliveButton.textContent = "Alive";
    deadButton.textContent = "Dead";
    ageButton.textContent = "Age";

    aliveButton.addEventListener('click', () => {
        if(selectedFilters.has("alive")) selectedFilters.delete("alive");
        else selectedFilters.add("alive");
        aliveButton.classList.toggle("selected");
        filterCharacters(selectedFilters);
    });
    deadButton.addEventListener('click', () => {
        if(selectedFilters.has("dead")) selectedFilters.delete("dead");
        else selectedFilters.add("dead");
        deadButton.classList.toggle("selected");
        filterCharacters(selectedFilters)
    });

    ageButton.addEventListener('click', () => {
        if(selectedFilters.has('ageAscending')) {
            selectedFilters.delete('ageAscending');
            selectedFilters.add('ageDescending');
            ageButton.classList.toggle('descending');
            ageButton.classList.toggle('ascending');
        }else if(selectedFilters.has('ageDescending')) {
            selectedFilters.delete('ageDescending');
            selectedFilters.add('ageAscending');
            ageButton.classList.toggle('descending');
            ageButton.classList.toggle('ascending');
        }else {
            selectedFilters.add('ageAscending');
            ageButton.classList.toggle('ascending');
        }
        filterCharacters(selectedFilters);
    });


    document.querySelector('.filters').appendChild(aliveButton);
    document.querySelector('.filters').appendChild(deadButton);
    document.querySelector('.filters').appendChild(ageButton);
}

const filterCharacters = (selectedFilters) => {
    console.log('event');
    const sections = document.querySelectorAll('.characters section');
    let newSections = Array.from(sections);
    if(selectedFilters.has("alive")) {
        newSections = newSections.filter(section => section.dataset.alive == "true");
        console.log(newSections);
    }
    if(selectedFilters.has("dead")) {
        newSections = newSections.filter(section => section.dataset.alive != "true");
        console.log(newSections);
    }
    if (selectedFilters.has('ageAscending')) {
        sections.sort((c1, c2) => Number(c1.dataset.age) - Number(c2.dataset.age));
    } else if (selectedFilters.has('ageDescending')) {
        sections.sort((c1, c2) => Number(c2.dataset.age) - Number(c1.dataset.age));
    }


    sections.forEach(section => newSections.includes(section) ? section.style.display = "" : section.style.display = "none");

};