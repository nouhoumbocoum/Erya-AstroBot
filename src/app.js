const searchInput = document.getElementById("searchInput");
const objectCards = [...document.querySelectorAll(".object-card")];
const emptyState = document.getElementById("emptyState");

const startButton = document.getElementById("startButton");
const exploreButton = document.getElementById("exploreButton");
const askButton = document.getElementById("askButton");
const chatButton = document.getElementById("chatButton");

const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const mainMenu = document.getElementById("mainMenu");
const menuLinks = [...document.querySelectorAll(".menu-link")];

const themeSelect = document.getElementById("themeSelect");
const toast = document.getElementById("toast");

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");

    window.clearTimeout(showToast.timeout);

    showToast.timeout = window.setTimeout(() => {
        toast.classList.add("hidden");
    }, 2800);
}

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth"
    });
}

function openMenu() {
    mainMenu.classList.remove("hidden");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Fermer le menu");
}

function closeMenu() {
    mainMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Ouvrir le menu");
}

searchInput?.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    let visibleCount = 0;

    objectCards.forEach((card) => {
        const data = card.dataset.name || "";
        const visible = data.includes(query);

        card.classList.toggle("hidden", !visible);

        if (visible) {
            visibleCount += 1;
        }
    });

    emptyState.classList.toggle("hidden", visibleCount !== 0);
});

menuToggle?.addEventListener("click", () => {
    const isOpen = !mainMenu.classList.contains("hidden");

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

menuClose?.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

startButton?.addEventListener("click", () => {
    closeMenu();
    scrollToSection("explorer");
});

exploreButton?.addEventListener("click", () => {
    scrollToSection("explorer");
});

askButton?.addEventListener("click", () => {
    scrollToSection("copilote");
});

chatButton?.addEventListener("click", () => {
    showToast(
        "Le copilote IA sera connecté dans la prochaine étape. 🤖"
    );
});

document.addEventListener("click", (event) => {
    if (
        !mainMenu.contains(event.target) &&
        !menuToggle.contains(event.target) &&
        !mainMenu.classList.contains("hidden")
    ) {
        closeMenu();
    }
});

const savedTheme = localStorage.getItem("erya-theme");

if (savedTheme) {
    document.body.dataset.theme = savedTheme;

    if (themeSelect) { 
        themeSelect.value = savedTheme;
    }
}

themeSelect?.addEventListener("change", (event) => {
    const theme = event.target.value;

    document.body.dataset.theme = theme;

    localStorage.setItem("erya-theme", theme);

    const selectedText =
        event.target.options[event.target.selectedIndex].text;

    showToast(`Thème « ${selectedText} » activé.`);
});