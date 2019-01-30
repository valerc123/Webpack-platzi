import 'babel-polyfill';
import videoPlatzi from '../video/que-es-core.mp4';
import "../css/estilos.css";
// import platziImg from '../images/platzi.png';

import { messages } from "./message";
// console.log("texto con webpack");
document.write(messages.firstMessage);
messages.delayedMessage();

//url-loader-video
const video = document.createElement('video');
video.setAttribute('src', videoPlatzi);
video.setAttribute('width', 480);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);
video.setAttribute('muted',true);
document.body.append(video);
console.log("texto con webpack desde un webpack.config.js"); 