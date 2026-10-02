// Apply the saved theme before CSS loads to avoid a flash of the wrong theme.
// A first visit always starts in light mode, regardless of system preferences.
(() => {
  let theme = "light";
  try {
    if (localStorage.getItem("portfolio.theme") === "dark") theme = "dark";
  } catch {
    // Storage may be disabled; the controls still work for this visit.
  }
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content =
    theme === "dark" ? "#080b14" : "#f8fafc";
})();
