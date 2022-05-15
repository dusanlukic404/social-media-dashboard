const themeBtn = document.querySelector(".theme__btn");

const switchTheme = function () {
  document.querySelector(".toggler").classList.toggle("toggler--active");
  let theme = document.documentElement.getAttribute("color-scheme");
  if (theme === "light") {
    document.documentElement.setAttribute("color-scheme", "dark");
  } else {
    document.documentElement.setAttribute("color-scheme", "light");
  }
};

themeBtn.addEventListener("click", switchTheme);
