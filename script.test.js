import {
    englishToMorse,
    morseToEnglish,
    invalidNumberError,
    invalidSymbolError,
    otherInvalidError,
} from "./script.js";

// handle spaces, handle other characters, explore edge cases?

// describe("Testing function to detect numbers from input", () => {
//   test("Should correctly determine if numbers exist in input", () => {
//     expect(findNumberInput)
//   })
// })

// describe("Testing to find correct input", () => {
//     it("Throws an error if input contains numbers", () => {
//         expect(() => {
//             englishToMorse("3");
//         }).toThrow(invalidNumberError);
//         expect(() => {
//             englishToMorse("l33t sp33k");
//         }).toThrow(invalidNumberError);
//     });
//     it("Throws an error if input contains symbols", () => {
//         expect(() => {
//             englishToMorse("/?@$-_");
//         }).toThrow(invalidSymbolError);
//         expect(() => {
//             englishToMorse("asd'(?>,>");
//         }).toThrow(invalidSymbolError);
//     });
//     it("Throws an error for non-English characters or mixed with morse", () => {
//         expect(() => {
//             englishToMorse("..- --.");
//         }).toThrow(otherInvalidError);
//         expect(() => {
//             englishToMorse("aa .- lo --.");
//         }).toThrow(otherInvalidError);
//     });
// });

describe("Testing english to morse translation", () => {
    test("Should correctly translate words", () => {
        expect(englishToMorse("FISH")).toBe("..-. .. ... ....");
        expect(englishToMorse("EASTER SHOW")).toBe(
            ". .- ... - . .-.   ... .... --- .--"
        );
    });
    it("Accounts for lowercase letters", () => {
        expect(englishToMorse("fish")).toBe("..-. .. ... ....");
        expect(englishToMorse("EasTeR SHoW")).toBe(
            ". .- ... - . .-.   ... .... --- .--"
        );
    });
    it("Throws an error if input contains numbers", () => {
        expect(() => {
            englishToMorse("3");
        }).toThrow(invalidNumberError);
        expect(() => {
            englishToMorse("l33t sp33k");
        }).toThrow(invalidNumberError);
    });
    it("Throws an error if input contains symbols", () => {
        expect(() => {
            englishToMorse("/?@$_");
        }).toThrow(invalidSymbolError);
        expect(() => {
            englishToMorse("asd'(?>,>");
        }).toThrow(invalidSymbolError);
    });
    it("Throws an error for non-English characters or morse", () => {
        expect(() => {
            englishToMorse("..- --.");
        }).toThrow(otherInvalidError);
        expect(() => {
            englishToMorse("aa .- lo --.");
        }).toThrow(otherInvalidError);
    });
});

describe("Testing morse to english translation", () => {
    test("Should correctly translate morse", () => {
        expect(morseToEnglish("..-. .. ... ....")).toBe("FISH");
        expect(morseToEnglish(". .- ... - . .-. ... .... --- .--")).toBe(
            "EASTERSHOW"
        );
    });
    it("Throws an error if input contains numbers", () => {
        expect(() => {
            morseToEnglish("3");
        }).toThrow(invalidNumberError);
        expect(() => {
            morseToEnglish("..- .-- 3 ... 6");
        }).toThrow(invalidNumberError);
    });
    it("Throws an error if input contains symbols", () => {
        expect(() => {
            morseToEnglish("/ ? @ $ _");
        }).toThrow(invalidSymbolError);
        expect(() => {
            morseToEnglish(".- ' ? > , > .. -.");
        }).toThrow(invalidSymbolError);
    });
    it("Throws an error if input contains non-morse code, including English", () => {
        expect(() => {
            morseToEnglish("aaaaooo");
        }).toThrow(otherInvalidError);
        expect(() => {
            morseToEnglish("abb ..-- asad .--.");
        }).toThrow(otherInvalidError);
    });
});
