(() => {
  window.onload = () => {
    let header__burger = document.querySelector(".header-burger");
    let header__menu = document.querySelector(".main-navigation");
    console.log(header__burger, header__menu);
    let body = document.querySelector("body");
    header__burger.addEventListener("click", (e) => {
      header__burger.classList.toggle("active");
      header__menu.classList.toggle("active");
      body.classList.toggle("lock");
    });
  };
})();
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
console.log(closeEls);
const isVisible = "is-visible";
for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    console.log(modalId);
    document.getElementById(modalId).classList.toggle(isVisible);
  });
}
for (const el of closeEls) {
  el.addEventListener("click", function () {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
const min = new Date()
  .toLocaleString("ru", options)
  .split(".")
  .reverse()
  .join("-");
document.getElementById("dayToday").valueAsDate = new Date();
document.getElementById("dayToday").setAttribute("min", min);
