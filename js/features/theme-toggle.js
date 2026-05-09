// theme-toggle.js

function setupThemeToggle() {

  const btn = document.getElementById("theme-btn");

  // DEFAULT BUTTON TEXT
  if (document.documentElement.classList.contains("dark")) {
    btn.innerHTML = "☀️ Light";
  } else {
    btn.innerHTML = "🌙 Dark";
  }

  // TOGGLE THEME
  btn.addEventListener("click", () => {

    document.documentElement.classList.toggle("dark");

    // UPDATE BUTTON TEXT
    if (document.documentElement.classList.contains("dark")) {

      btn.innerHTML = "☀️ Light";

    } else {

      btn.innerHTML = "🌙 Dark";

    }

  });

}