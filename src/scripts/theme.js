// Settings to the theme switching feature
const theme = (themeBtn) => {

    window.addEventListener("load", () => {     // Listen the page loading

        // Get the user's preferences and change the theme
        const themePreference = localStorage.getItem("theme");
        if (themePreference == "dark") {
            document.documentElement.classList.add("dark");
            themeBtn.src = "./assets/moon.png";
        }

    });

    themeBtn.addEventListener("click", (e) => {     // Listen the click on the theme button

        e.preventDefault();     // Prevents the button automatic behaviour

        // Change the theme and save the user's preferences
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.contains("dark") ? themeBtn.src = "./assets/moon.png" : themeBtn.src = "./assets/sun.png";
        document.documentElement.classList.contains("dark") ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light");

    });

};

export default theme;       // Export the theme switching function