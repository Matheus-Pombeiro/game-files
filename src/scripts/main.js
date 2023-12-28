// Import functions
import theme from "./theme.js";     // Theme
import game from "./game.js";       // Game

// Get the references from HTML
const themeBtn = document.querySelector("[data-theme]");            // Theme button
const frm = document.querySelector("form");                         // Form
const gameIn = document.querySelector("[data-game-in]");            // Game input
const sectionOut = document.querySelector("[data-section-out]");    // Section out

// Call functions
theme(themeBtn);                // Theme
game(frm, gameIn, sectionOut);  // Game