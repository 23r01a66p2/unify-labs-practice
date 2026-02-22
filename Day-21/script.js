const toggle = document.getElementById("themeToggle");
const modeText = document.getElementById("modeText");
const body = document.body;

const SETTINGS_KEY = "appSettings";

// Load saved theme
function loadTheme() {
    const saved = localStorage.getItem(SETTINGS_KEY);
    if (saved) {
        const settings = JSON.parse(saved);
        return settings.theme;
    }
    return "light";
}

// Save theme
function saveTheme(theme) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ theme }));
}

// Apply theme
function applyTheme(theme) {
    body.className = theme;   // This ensures only one class exists
    modeText.textContent = theme === "dark" ? "Dark Mode" : "Light Mode";
    toggle.checked = theme === "dark";
}

// Initial load
const currentTheme = loadTheme();
applyTheme(currentTheme);

// Toggle event
toggle.addEventListener("change", () => {
    const newTheme = toggle.checked ? "dark" : "light";
    applyTheme(newTheme);
    saveTheme(newTheme);
});