import 'babel-polyfill';
import "./estilos.css";

import { messages } from "./message";
// console.log("texto con webpack");
document.write(messages.firstMessage);
messages.delayedMessage();
console.log("texto con webpack desde un webpack.config.js"); 