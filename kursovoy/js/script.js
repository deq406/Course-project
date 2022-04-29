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
"use strict";

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === "complete"
      : document.readyState !== "loading"
  ) {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(() => {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    // let items; //value of our items, plased in items.json file
    // let listItems;
    fetch("../json/pictures.json")
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        response.json().then(function (data) {
          // console.log(data);
          // items = data;
          // console.log("items:", items);
          const listItems = data.map((item) => {
            return `${item.url}`;
          });
          console.log(" new items: ", listItems);

          const ul = document.createElement("ul");
          ul.classList.add("row");
          listItems.forEach((el) => {
            ul.innerHTML += el;
          });
          const wrapper = document.querySelector(".wrapper");
          wrapper.appendChild(ul);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  });

  // const switcher = document.querySelector('input[type=checkbox]');
  // i
});
