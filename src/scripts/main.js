// Import functions
import theme from "./theme.js";     // Theme
import game from "./game.js";       // Game
import modal from "./modal.js";

// Get the references from HTML
const modalOpen = document.querySelector("[data-modal-open]");      // Modal open
const modalClose = document.querySelector("[data-modal-close]");    // Modal close
const themeBtn = document.querySelector("[data-theme]");            // Theme button
const frm = document.querySelector("form");                         // Form
const gameIn = document.querySelector("[data-game-in]");            // Game input
const sectionOut = document.querySelector("[data-section-out]");    // Section out

// Call functions
modal(modalOpen, modalClose);   // Modal
theme(themeBtn);                // Theme
game(frm, gameIn, sectionOut);  // Game