const container = document.querySelector('#container');

const pElement = document.createElement('p');

pElement.style.color = "red";
pElement.innerText = "Hey, I'm red";

container.appendChild(pElement);

const hThree = document.createElement('h3');
hThree.innerText = "I'm a blue h3";
hThree.style.color = 'blue';

container.appendChild(hThree);


const div = document.createElement('div');

div.style.cssText = 'background-color: pink; border: 1px solid black;';

const hInDiv = document.createElement('h1');
hInDiv.innerText = "I'm in a div";
div.appendChild(hInDiv);

const pInDiv = document.createElement('p');
pInDiv.innerText = 'me too';
div.appendChild(pInDiv);

container.appendChild(div);