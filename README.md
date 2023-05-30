# MorseTranslator-Project

## Requirements / Purpose

-   Create a translator for Morse Code to English and vice versa using html and javascript, and implement testing using jest
-   Created during Nology training program to further explore javascript and DOM, as well as implementing testing

---

## Design Goals / Approach

-   Chose to create two text areas, one to input text and the other to display translated text
-   Kept the styling simple and straightforward
-   Approached with TDD, to understand how testing works and to get a sense of obstacles to overcome
-   Stores the translation 'library' as objects, and unrecognised characters as arrays (strictly defined)
-   Also includes commented out code from previous iterations

---

## Features

-   Input English or Morse Code into text area and click to translate
-   Includes tests to ensure translation works properly and can account for spaces and other characters

## Known issues

-   If invalid input, user doesn't receive error message (only displayed in console)
-   Can only account for English characters, and only what is stored in the data file

## Future Goals

-   Make the translation less dependent on stored data objects -> use library, or maybe even design separate backend and database
-   Add error handling to throw up a message on display when invalid input, not only in the console
-   Simplifying the code? condensing the functions (since the error handling is very similar) into one rather than writing two separate functions (need to rewrite how inputText is handled)
-   Make the display more mobile friendly, reactive display

## Change logs

### 30/05/2022

-   Changed the way spaces are translated - added " " to translate to "|" for morse and vice versa
-   Added instructions for use
-   Changed the translation function from using reduce to using map
