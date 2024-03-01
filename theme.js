let icon = document.getElementById('moon-icon');
let container = document.getElementById('contentall');
let leaderCard = document.getElementById('leadCard');

function setTheme(theme) {
    document.body.classList.toggle("dark-mod", theme === "dark");
    if (theme === "dark") {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        container.style.background = "linear-gradient(to bottom, rgb(230 238 244 / 0%) 0, #232425 100%)";
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        container.style.background = "linear-gradient(to bottom, rgba(214, 238, 255, 0) 0, #d6eeff 100%)";
    }
}

function getTheme() {
    const themeCookie = document.cookie.split('; ').find(row => row.startsWith('theme='));
    return themeCookie ? themeCookie.split('=')[1] : null;
}

icon.addEventListener('click', () => {
    document.body.classList.toggle("dark-mod");

    const theme = document.body.classList.contains("dark-mod") ? "dark" : "light";
    document.cookie = `theme=${theme}; path=/`;

    setTheme(theme);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getTheme();
    if (savedTheme) {
        setTheme(savedTheme);
    }
});
