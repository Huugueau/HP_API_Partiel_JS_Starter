import Character from "./Character.js";
import { getCharacters, displayHouses, displayFilters } from "./Utils.js";

let selectedFilters = new Set();

let characters = await getCharacters();
characters.forEach(c => {
    let character = new Character(c);
    character.displayCard();
});

displayHouses();
displayFilters(selectedFilters);

