const apiToken = "https://run.mocky.io/v3/3038094f-7d8a-4509-aa02-5842903e75ef";
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
  captionText.innerHTML = e.alt;
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
}
