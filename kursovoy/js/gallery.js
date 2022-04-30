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
