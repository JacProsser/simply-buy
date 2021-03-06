// get the system theme media query and localStorage theme
let systemIsDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = localStorage.getItem("color-mode-toggle");

// set color model to dark mode
function darkMode() {
  document.documentElement.setAttribute("theme", "dark");
  localStorage.setItem("color-mode-toggle", "dark");
}

// set color mode to light mode
function lightMode() {
  document.documentElement.setAttribute("theme", "light");
  localStorage.setItem("color-mode-toggle", "light");
}

// default color mode on reload
if (theme === "dark") {
  darkMode();
} else if (theme === "light") {
  lightMode();
} else if (systemIsDark.matches) {
  darkMode();
} else {
  lightMode();
}

// toggle the color mode
function toggleColorMode() {
  let theme = localStorage.getItem("color-mode-toggle");

  if (theme === "dark") {
    lightMode();
  } else if (theme === "light") {
    darkMode();
  } else if (systemIsDark.matches) {
    lightMode();
  } else {
    darkMode();
  }
}

toggles = document.getElementsByClassName("color-mode-toggle");
console.log(toggles);
for (var i = 0; i < toggles.length; i++) {
  toggles[i].onclick = toggleColorMode;
  console.log(toggles[i]);
}
