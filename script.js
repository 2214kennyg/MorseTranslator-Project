import {
    englishMorse,
    morseEnglish,
    numberArr,
    symbolArr,
    arrEnglish,
    arrMorse,
} from "./data.js";

export const invalidNumberError = new Error("Input cannot include numbers");
export const invalidSymbolError = new Error("Input cannot contain symbols");
export const otherInvalidError = new Error(
    "Input must all be in English or Morse"
);
// determine if input is morse or english

export const englishToMorse = (inputText) => {
    const translateArr = inputText.toUpperCase().split("");
    const findNumberInput = translateArr.some((value) =>
        numberArr.includes(value)
    );
    const findSymbolInput = translateArr.some((value) =>
        symbolArr.includes(value)
    );
    const findOtherInputEnglish = translateArr.every((value) =>
        arrEnglish.includes(value)
    );

    if (findNumberInput) {
        throw invalidNumberError;
    }
    if (findSymbolInput) {
        throw invalidSymbolError;
    }
    if (!findOtherInputEnglish) {
        throw otherInvalidError;
    } else
        return (
            translateArr
                .map((char) => englishMorse[char])
                // .reduce((acc, value) => {
                //     return [...acc, englishMorse[value]];
                // }, [])
                .join(" ")
        );
};

export const morseToEnglish = (inputText) => {
    const translateArr = inputText.split(" ");
    const findNumberInput = translateArr.some((value) =>
        numberArr.includes(value)
    );
    const findSymbolInput = translateArr.some((value) =>
        symbolArr.includes(value)
    );
    const findOtherInputMorse = translateArr.every((value) =>
        arrMorse.includes(value)
    );

    if (findNumberInput) {
        throw invalidNumberError;
    }
    if (findSymbolInput) {
        throw invalidSymbolError;
    }
    if (!findOtherInputMorse) {
        throw otherInvalidError;
    } else
        return (
            translateArr
                .map((char) => morseEnglish[char])
                // .reduce((acc, value) => {
                //     return [...acc, morseEnglish[value]];
                // }, [])
                .join("")
        );
};
