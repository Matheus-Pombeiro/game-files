// Add and remove games from the list

const addGames = (gameTittle, sectionOut) => {   // Add games

    const containerOut = document.createElement("div");     // Create a div who will contain the paragraph and the delete button
    const p = document.createElement("p");                  // Create a paragraph who will contains the name of the game
    const gameName = document.createTextNode(gameTittle);   // Create a text using the name of the game
    const deleteBtn = document.createElement("i");          // Create a italic tag to contains the delete button
    const deleteText = document.createTextNode("x");        // Create the text of the delete button                    

    // Defines the output hierarchy
    p.appendChild(gameName);
    deleteBtn.appendChild(deleteText);
    containerOut.appendChild(p);
    containerOut.appendChild(deleteBtn);
    sectionOut.appendChild(containerOut);

    // Add a classe to the elements
    containerOut.classList.add("output");   
    p.classList.add("output-p"); 
    deleteBtn.classList.add("delete-btn");

    if (localStorage.getItem("games")) {    // If exists items of the list saved in the localStorage...

        const games = localStorage.getItem("games") + "," + p.innerText;   // Get the old items and save the new together
        localStorage.setItem("games", games);                               // Save the new list of the items

    } else {    // Else...

        localStorage.setItem("games", p.innerText);     // Save the 1st item of the list in the localStorage

    }

};

const loadGames = (sectionOut) => {   // Declare the function who will get the items of the list from the localStorage when the page's loading

    window.addEventListener("load", () => {     // Listen the page loading

        if (localStorage.getItem("games")) {    // If exists items of the list saved in the localStorage... 

            const games = localStorage.getItem("games").split(",");     // Get the items of the list

            games.forEach(game => {     // Walks the array who contains the items of the list

                const containerOut = document.createElement("div");     // Create a div who will contain the paragraph and the delete button
                const p = document.createElement("p");                  // Create a paragraph who will contains the name of the game
                const gameName = document.createTextNode(game);         // Create a text using the name of the game
                const deleteBtn = document.createElement("i");          // Create a italic tag to contains the delete button
                const deleteText = document.createTextNode("x");        // Create the text of the delete button

                // Defines the output hierarchy
                p.appendChild(gameName);
                deleteBtn.appendChild(deleteText);
                containerOut.appendChild(p);
                containerOut.appendChild(deleteBtn);
                sectionOut.appendChild(containerOut);

                // Add a classe to the elements
                containerOut.classList.add("output");   
                p.classList.add("output-p"); 
                deleteBtn.classList.add("delete-btn");

            });

        }

    });

};

const removeGames = (sectionOut) => {   // Remove games

    sectionOut.addEventListener("click", (e) => {       // Listen the click on the section of the output

        if (e.target.classList.contains("delete-btn")) {    // If the user click on the delete button...
            
            e.target.parentElement.remove();    // Remove the game selected from the list

            localStorage.removeItem("games");   // Remove the all the items of the list from the localStorage

            for (let i = 1; i < sectionOut.children.length; i++) {      // Walks the list of the games

                const game = sectionOut.children[i].children[0].innerText;      // Get each game from the output section

                if (localStorage.getItem("games")) {    // If exists items of the list saved in the localStorage...

                    const games = localStorage.getItem("games") + "," + game;   // Get the old items and save the new together
                    localStorage.setItem("games", games);                       // Save the new list of the items
            
                } else {    // Else...
            
                    localStorage.setItem("games", game);    // Save the 1st item of the list in the localStorage
            
                }

            }

        }

    });

};

const game = (frm, gameIn, sectionOut) => {     // Main function

    loadGames(sectionOut);      // Call the function who will make the loading of the items of the list
    removeGames(sectionOut);    // Call the function who removes items from the list

    frm.addEventListener("submit", (e) => {     // Listen the data submit in the form

        e.preventDefault();     // Prevents the form automatic behaviour

        const gameTittle = gameIn.value;    // Get the game

        addGames(gameTittle, sectionOut);    // Call the function who will add the games in the page

        gameIn.value = "";      // Clean the input
        gameIn.focus();         // Focus on the input

    });

};

export default game;    // Export the function who adds and deletes games from the list