import Character from "./Character.js";
import { getCharacters, displayHouses } from "./Utils.js";


let characters = await getCharacters();
characters.forEach(c => {
    let character = new Character(c);
    character.displayCard();
});
displayHouses();

