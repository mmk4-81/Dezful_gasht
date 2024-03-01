function toggleq(id) {
  var element = document.getElementById(id);
  if (element.style.display === "block") {
      element.style.display = "none";
  } else {
      element.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slidesPerPage = 4;
  const slideInterval = 5000;
  let autoSlide;

  function showSlides() {
    const slides = document.getElementsByClassName("tour_card_item");

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }

    for (let i = currentIndex; i < currentIndex + slidesPerPage; i++) {
      const activeIndex = i % slides.length;
      slides[activeIndex].classList.add("active");
    }
  }

  function nextSlides() {
    currentIndex = (currentIndex + slidesPerPage) % document.getElementsByClassName("tour_card_item").length;
    showSlides();
  }

  function prevSlides() {
    currentIndex = (currentIndex - slidesPerPage + document.getElementsByClassName("tour_card_item").length) % document.getElementsByClassName("tour_card_item").length;
    showSlides();
  }

  showSlides();

  function startAutoSlide() {
    autoSlide = setInterval(nextSlides, slideInterval);
  }

  startAutoSlide();

  document.querySelector(".card_icon_right").addEventListener("click", function () {
    clearInterval(autoSlide);
    nextSlides();
    startAutoSlide();
  });

  document.querySelector(".card_icon_left").addEventListener("click", function () {
    clearInterval(autoSlide);
    prevSlides();
    startAutoSlide();
  });
});
