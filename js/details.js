import Character from "./Character.js";
import { getCharacter } from "./Utils.js";


const searchParams = new URLSearchParams(window.location.search);
const data = await getCharacter(searchParams.get('id'));
const character = new Character(data[0]);
character.displayDetails();
