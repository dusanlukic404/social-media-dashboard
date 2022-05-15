const themeBtn = document.querySelector(".theme__btn");
let selectedTheme = localStorage.getItem("theme");

window.addEventListener("load", function () {
  if (
    selectedTheme === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.querySelector(".toggler").classList.toggle("toggler--active");
    document.documentElement.setAttribute("color-scheme", "dark");
  } else if (selectedTheme === "light") {
    document.documentElement.setAttribute("color-scheme", "light");
  }
});

const switchTheme = function () {
  document.querySelector(".toggler").classList.toggle("toggler--active");
  let theme = document.documentElement.getAttribute("color-scheme");
  if (theme === "light") {
    document.documentElement.setAttribute("color-scheme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("color-scheme", "light");
    localStorage.setItem("theme", "light");
  }
};

themeBtn.addEventListener("click", switchTheme);
