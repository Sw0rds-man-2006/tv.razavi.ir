document.addEventListener("DOMContentLoaded", function () {
  console.log("hello");

  const contetn1 = document.getElementById("content1");
  const contetn2 = document.getElementById("content2");
  const contetn3 = document.getElementById("content3");
  const contetn4 = document.getElementById("content4");
  const contetn5 = document.getElementById("content5");
  const contetn5back = document.getElementById("content5-back");
  const contetn6 = document.getElementById("content6");
  const contetn6back = document.getElementById("content6-back");
  contetn1.addEventListener("click", function () {
    // contetn1.classList.add('up300px');
  });

  contetn2.addEventListener("click", function () {});

  contetn3.addEventListener("click", function () {
    contetn1.classList.add("up300px");
    contetn2.classList.add("up370px");
    contetn3.classList.add("right480px");
    contetn4.classList.add("down85px");
    setTimeout(() => {
      contetn5.classList.add("right480px");
    }, 800);
  });

  contetn4.addEventListener("click", function () {
    contetn1.classList.add("up300px");
    contetn2.classList.add("up370px");
    contetn3.classList.add("up440px");
    contetn4.classList.add("right480px");
    setTimeout(() => {
      contetn6.classList.add("right480px");
    }, 800);
  });

  contetn5back.addEventListener("click", function () {
    contetn5.classList.remove("right480px");
    setTimeout(() => {
      contetn1.classList.remove("up300px");
      contetn2.classList.remove("up370px");
      contetn3.classList.remove("right480px");
      contetn4.classList.remove("down85px");
    }, 800);
  });

  contetn6back.addEventListener("click", function () {
    contetn6.classList.remove("right480px");
    setTimeout(function () {
      contetn1.classList.remove("up300px");
      contetn2.classList.remove("up370px");
      contetn3.classList.remove("up440px");
      contetn4.classList.remove("right480px");
    }, 800);
  });

  let today = new Date();

  let f = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "short",
  });

  let t = f.format(today);

  let tarikh = document.getElementById("tarikh");
  tarikh.textContent = `${t.toString()}`;

  let currentIndex = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  const index1 = document.getElementById("index1");
  const index2 = document.getElementById("index2");
  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * 600;
    slides.style.transform = `translateX(${offset}px)`;
  }
  index1.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex -= 1;
      const offset = -currentIndex * 600;
      slides.style.transform = `translateX(${offset}px)`;
    }
  });
  index2.addEventListener("click", function () {
    if (currentIndex < 6) {
      currentIndex += 1;
      const offset = -currentIndex * 600;
      slides.style.transform = `translateX(${offset}px)`;
    }
  });
  setInterval(showNextSlide, 5000);
});
