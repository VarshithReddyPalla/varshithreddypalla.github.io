const root = document.documentElement;
const locales = window.portfolioLocales;
const languageSelect = document.getElementById("languageSelect");
const themeToggle = document.getElementById("themeToggle");
let language = "de";

function savePreference(key, value) {
  try {
    localStorage.setItem(`portfolio.${key}`, value);
  } catch {
    // Settings still work when the browser does not allow persistent storage.
  }
}

function translate(key) {
  return locales[language][key] ?? locales.de[key];
}

function updateThemeControl() {
  const dark = root.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute("aria-label", translate(dark ? "controls.enableLight" : "controls.enableDark"));
  document.getElementById("themeLabel").textContent = translate(dark ? "controls.light" : "controls.dark");
  document.getElementById("themeIcon").textContent = dark ? "☀" : "☾";
  document.querySelector('meta[name="theme-color"]').content = dark ? "#080b14" : "#f8fafc";
}

function updateMenuLabel() {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-label", translate(open ? "controls.closeMenu" : "controls.openMenu"));
}

function setLanguage(value) {
  language = value === "en" ? "en" : "de";
  root.lang = language;
  languageSelect.value = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const message = translate(element.dataset.i18n);
    if (typeof message === "string") element.textContent = message;
  });
  document.title = translate("meta.title");
  document.querySelector('meta[name="description"]').content = translate("meta.description");
  updateThemeControl();
  updateMenuLabel();
}

themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  savePreference("theme", root.dataset.theme);
  updateThemeControl();
});

languageSelect.addEventListener("change", () => {
  setLanguage(languageSelect.value);
  savePreference("language", language);
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  updateMenuLabel();
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    updateMenuLabel();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mainNav.classList.contains("open")) {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    updateMenuLabel();
    menuToggle.focus();
  }
});

try {
  language = localStorage.getItem("portfolio.language") === "en" ? "en" : "de";
} catch {
  // German remains the default when storage is unavailable.
}
setLanguage(language);

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");

filters.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("active")));
  button.addEventListener("click", () => {
    filters.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    const filter = button.dataset.filter;

    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(" ");
      const show = filter === "all" || tags.includes(filter);
      card.classList.toggle("hidden", !show);
    });
  });
});

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    el.classList.add("reveal-pending");
    observer.observe(el);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
