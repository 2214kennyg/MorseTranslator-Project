import { englishToMorse, morseToEnglish } from "./script.js";
import { arrEnglish, arrMorse } from "./data.js";

const body = document.querySelector("body");
const submit = document.querySelector("#submit");
const input = document.querySelector("#inputArea");
const output = document.querySelector("#output");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (
        input.value
            .toUpperCase()
            .split("")
            .every((value) => arrEnglish.includes(value))
    ) {
        const outputText = document.createTextNode(englishToMorse(input.value));
        if (output.childNodes.length > 0) {
            output.removeChild(output.lastChild);
        }
        output.appendChild(outputText);
    } else if (
        input.value.split(" ").every((value) => arrMorse.includes(value))
    ) {
        const outputText = document.createTextNode(morseToEnglish(input.value));
        if (output.childNodes.length > 0) {
            output.removeChild(output.lastChild);
        }
        output.appendChild(outputText);
    }
    // the output of script is a string
});

// submit.addEventListener("click", (event) => {
//     event.preventDefault();
//     const outputText = document.createTextNode(morseToEnglish(input.value));
//     if (output.childNodes.length > 0) {
//         output.removeChild(output.lastChild);
//     }
//     output.appendChild(outputText);
// });
