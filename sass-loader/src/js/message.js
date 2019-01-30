import renderToDom from './render-to-dom';
import makeMessage from './make-message';
const waitTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('han pasado 3 seg');
    }, 3000)
})
var messages = {
    firstMessage: "hola mundo desde un modulo",
    delayedMessage: async() => {
        const message = await waitTime;
        console.log(message);
        // const element = document.createElement('p');
        // element.textContent= message;
        renderToDom(makeMessage(message));
    },
}
export {messages}