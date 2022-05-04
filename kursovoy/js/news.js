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
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
let secondSlideIndex = 1;
let thirdSlideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex, 1);
showSlides(slideIndex, 2);
showSlides(slideIndex, 3);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide(item) {
  if (item.id === "secondNext") {
    showSlides((secondSlideIndex += 1), 2);
  } else if (item.id === "thirdNext") {
    showSlides((thirdSlideIndex += 1), 3);
  } else {
    showSlides((slideIndex += 1), 1);
  }
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide(item) {
  if (item.id === "secondNext") {
    showSlides((secondSlideIndex -= 1), 2);
  } else if (item.id === "thirdNext") {
    showSlides((thirdSlideIndex -= 1), 3);
  } else {
    showSlides((slideIndex -= 1), 1);
  }
}

/* Функция перелистывания: */
function showSlides(n, id) {
  /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
  if (id === 1) {
    slides = document.getElementsByClassName("item");
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
      slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
  } else if (id === 2) {
    slides = document.getElementsByClassName("second-slider-item");
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      secondSlideIndex = 1;
    }
    if (n < 1) {
      secondSlideIndex = slides.length;
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
      slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[secondSlideIndex - 1].style.display = "block";
  } else {
    slides = document.getElementsByClassName("third-slider-item");
    if (n > slides.length) {
      thirdSlideIndex = 1;
    }
    if (n < 1) {
      thirdSlideIndex = slides.length;
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
      slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[thirdSlideIndex - 1].style.display = "block";
  }
}
