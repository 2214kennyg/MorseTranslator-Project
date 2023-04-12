import {
    englishMorse,
    morseEnglish,
    numberArr,
    symbolArr,
    arrEnglish,
    arrMorse,
} from "./data.js";

const invalidNumberError = new Error("Input cannot include numbers");
const invalidSymbolError = new Error("Input cannot contain symbols");
const otherInvalidErrorEnglish = new Error("Input must be English");

const englishToMorse = (inputText) => {
    const translateArr = inputText.toUpperCase().split("");
    const findNumberInput = translateArr.some((value) =>
        numberArr.includes(value)
    );
    const findSymbolInput = translateArr.some((value) =>
        symbolArr.includes(value)
    );
    const findOtherInput = translateArr.some((value) =>
        arrEnglish.includes(value)
    );

    if (findNumberInput) {
        throw invalidNumberError;
    }
    if (findSymbolInput) {
        throw invalidSymbolError;
    }
    if (!findOtherInput) {
        throw otherInvalidErrorEnglish;
    } else
        return translateArr
            .reduce((acc, value) => {
                return [...acc, englishMorse[value]];
            }, [])
            .join(" ");
};

const translateArr = " ..- --. ..-".split(" ");
const findOtherInput = translateArr.every((value) => arrMorse.includes(value));

console.log(translateArr);
console.log(findOtherInput);

// accounts for numbers (input.value returns strings, need to filter)
// value.match(/[A-Z]/gi);
// returns an array of matched things
// value.includes(/[A-Z]/gi);
// doesn't work for regex
// const testMsg = document.createTextNode("some stuff to read");
// output.appendChild(testMsg);

// console.log(
//     translateArr.reduce((acc, value) => {
//         console.log(
//             morseEnglish["---"],
//             morseEnglish[" "],
//             morseEnglish["---"]
//         );
//         return [...acc, morseEnglish[value]];
//     }, [])
// );

console.log(englishToMorse("aa lo"));

// const select = (arr, obj) =>
//     arr.reduce(
//         (acc, value) =>
//             Object.assign(acc, obj[value] ? { [value]: obj[value] } : null),
//         {}
//     );

// const select3 = (arr, obj) => {
//     arr.reduce((acc, value) => {
//         // console.log(obj[value]);
//         // console.log(acc);
//         return [...acc, obj[value]];
//         // acc.push(obj[value]);
//     }, []);
// };

// console.log(
//     translateArr.reduce((acc, value) => {
//         return [...acc, englishMorse[value]];
//     }, [])
// );

// const morseArr = Object.values(select(translateArr, englishMorse));
// morseArr.join(" ");

// const select2 = (arr, obj) => {
//     let o = [];
//     for (let k of arr) {
//         if (k in obj) {
//             o.push(obj[k]);
//             console.log(k);
//         }
//     }
//     return o;
// };
// select2(translateArr, englishMorse).join(" ");
// can't account for duplicates, only 1 key name in object, keeps overwriting
// const select3 = (arr, obj) => {
//     let o = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === Object.keys(obj)) {
//           o[] = obj[]
//         }
//         // for each index, find the object key, don't avoid duplicates, still use object.assign? or the other method
//     }
// };

// console.log(select3(translateArr, englishMorse));
