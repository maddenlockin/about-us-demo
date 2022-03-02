// import functions

import { people } from './data.js';

// grab DOM elements

const selectElement = document.querySelector('.select');
const divContainer = document.querySelector('.contain');
const name = document.getElementById('name');
const pronouns = document.querySelector('.pronouns');
const favPlace = document.querySelector('.fav-place');
const hobbies = document.querySelector('.hobbies');

// set event listeners

selectElement.addEventListener('change', (event) => {
    // call our render function here
});

function renderPerson(index) {
    divContainer.classList.add(`${people[index].name}`);
    name.textContent = 'Name: ' + people[index].name;
    pronouns.textContent = 'Pronouns: ' + people[index].pronouns;
    favPlace.textContent = 'Favorite Place: ' + people[index].favorite_place;

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbies.appendChild(li);
    }
}
// get user input
// use user input to update state
// update DOM to reflect the new state
