// import { englishToMorse, morseToEnglish } from "./script";

const body = document.querySelector("body");
const submit = document.querySelector("#submit");
const input = document.querySelector("#inputt");
const output = document.querySelector("#output");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    // accounts for numbers (input.value returns strings, need to filter)
    // value.match(/[A-Z]/gi);
    // returns an array of matched things
    // value.includes(/[A-Z]/gi);
    // doesn't work for regex
    englishToMorse(input.value);
    const testMsg = document.createTextNode("some stuff to read");
    output.appendChild(testMsg);
    // the output of script is a string
});

// submit.addEventListener("click", (event) => {
//     event.preventDefault();
//     if (input)
//     output.appendChild(morseToEnglish);
// });
