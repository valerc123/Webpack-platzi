import 'babel-polyfill';
import "../css/estilos.css";
import platziImg from '../images/platzi.png';
import data from './teachers.json';
//json-loader
import renderToDom from './render-to-dom.js';
console.log(data);
//itera el json
data.teachers.forEach((teacher) => {
    const element = document.createElement('li');
    element.textContent = teacher.name;
    renderToDom(element); // lo muestra en el dom
});

import { messages } from "./message";
// console.log("texto con webpack");
document.write(messages.firstMessage);
messages.delayedMessage();

//url-loader-images
const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 10);
img.setAttribute('height', 10);
document.body.append(img);
console.log("texto con webpack desde un webpack.config.js"); 