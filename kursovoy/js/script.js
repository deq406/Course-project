/*var requestURL = "../json/pictures.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  var images = request.response;
  insertImage(images);
};

function insertImage(jsonObj) {
  var img = document.querySelector(".testJson");
  img.src = jsonObj["picture"][0]["url"][0];
  console.log(jsonObj["picture"][0]["url"][0]);
}*/
function modalWindow(e) {
  var modal = document.getElementById("myModal");
  console.log(modal);
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = e.src;
  captionText.innerHTML = e.alt;
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
}
/*const ApiToken = "https://run.mocky.io/v3/46f6c3a1-c444-437a-bd36-cd7a77364b93";
const api = "https://run.mocky.io/v3/828b6f45-f5f2-4981-83a6-fc12e8d97870";
const dai = "https://run.mocky.io/v3/2258f670-874c-4a56-89cc-dfee1895a5bd";*/
const apiToken = "https://run.mocky.io/v3/3038094f-7d8a-4509-aa02-5842903e75ef";
fetch(apiToken)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("data", data[0]["url"]);
    var images = document.getElementsByClassName("image-json");
    for (let i = 0; i < images.length; i++) {
      images[i].src = data[i]["url"];
    }
  })
  .then(function () {
    console.log(document.querySelector(".testJson"));
  });
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
