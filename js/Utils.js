import House from "./House.js";

export async function getCharacters(house) {
   let response = await (house != undefined ? fetch(`https://hp-api.onrender.com/api/charactershouse/${house}`) : fetch("https://hp-api.onrender.com/api/characters"));
   let data = response.json();
   return data;
}

export function displayHouses() {
    const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
    houses.forEach(house => new House(house).displayHouse())
}