var requestURL = "/json/pictures.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  var images = request.response;
  insertImage(jsonObj);
};

function insertImage(jsonObj) {
  var img = document.querySelector(".testJson");
  img.src = jsonObj["picture"][0]["url"][0];
  console.log(jsonObj["picture"][0]["url"][0]);
}
