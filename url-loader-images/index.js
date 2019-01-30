import 'babel-polyfill';
import "./estilos.css";
import platziImg from './platzi.png';

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