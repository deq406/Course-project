const apiToken = "https://run.mocky.io/v3/ab75dc03-da59-448d-b941-19cc0b04d09d";
fetch(apiToken)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("data", data[0]["url"]);
    var images = document.getElementsByClassName("image-json");
    for (let i = 2, j = 0; j < images.length; i++, j++) {
      images[j].src = data[i]["url"];
    }
  })
  .then(function () {
    console.log(document.querySelector(".testJson"));
  });
function modalWindow(e) {
  var modal = document.getElementById("myModal");
  console.log(modal);
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = e.src;

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
  document.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".modal")) {
      modal.style.display = "none";
    }
  });
}
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
