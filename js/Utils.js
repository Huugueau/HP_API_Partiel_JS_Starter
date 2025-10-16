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