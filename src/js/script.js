const themeBtn = document.querySelector(".theme__btn");
let selectedTheme = localStorage.getItem("theme");

const changeAttribute = function (theme) {
  if (theme === "light") {
    document.querySelector(".toggler").classList.add("toggler--active");
    document.documentElement.setAttribute("color-scheme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.querySelector(".toggler").classList.remove("toggler--active");
    document.documentElement.setAttribute("color-scheme", "light");
    localStorage.setItem("theme", "light");
  }
};

window.addEventListener("load", function () {
  if (
    selectedTheme === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.querySelector(".toggler").classList.add("toggler--active");
    document.documentElement.setAttribute("color-scheme", `${selectedTheme}`);
  } else if (
    selectedTheme === "light" &&
    this.window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.querySelector(".toggler").classList.remove("toggler--active");
    document.documentElement.setAttribute("color-scheme", `${selectedTheme}`);
  } else {
    document.documentElement.setAttribute("color-scheme", "light");
  }
});

const switchTheme = function () {
  let theme = document.documentElement.getAttribute("color-scheme");
  changeAttribute(theme);
};

themeBtn.addEventListener("click", switchTheme);
