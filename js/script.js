function initAccordeon() {
  const firstSectionBodyHeight = document.querySelector(
    ".accordeon-section .accordeon-body > *"
  ).clientHeight;
  document.querySelector(".accordeon-section .accordeon-body").style.maxHeight =
    firstSectionBodyHeight + "px";

  document.querySelectorAll(".accordion-arrow")[0].style.transform =
    "rotate(0deg)";
}
initAccordeon();

const accordeonHeaderClickHandler = (e) => {
  document.querySelectorAll(".accordeon-section").forEach(function (section) {
    section.querySelector(".accordeon-body").style.maxHeight = "0px";

    section.querySelectorAll(".accordion-arrow").forEach((itemImg) => {
      itemImg.style.transform = "rotate(180deg)";
    });
  });

  const accordeonSection = e.target.closest(".accordeon-section");

  const insideElHeight = accordeonSection.querySelector(
    ".accordeon-body > *"
  ).clientHeight;

  accordeonSection.querySelector(".accordeon-body").style.maxHeight =
    insideElHeight + "px";

  accordeonSection.querySelector(".accordion-arrow").style.transform =
    "rotate(0deg)";
};

document.querySelectorAll(".accordeon-section").forEach(function (section) {
  section.addEventListener("click", accordeonHeaderClickHandler);
});


function initAccordeonTwo() {
  const firstSectionBodyHeight = document.querySelector(
    ".accordeon-section__two .accordeon-body__two > *"
  ).clientHeight;
  document.querySelector(
    ".accordeon-section__two .accordeon-body__two"
  ).style.maxHeight = firstSectionBodyHeight + "px";
  document.querySelectorAll(".accordion-arrow__two")[0].style.transform =
  "rotate(0deg)";
}

initAccordeonTwo();

const accordeonHeaderClickHandlerTwo = function (e) {
  document
    .querySelectorAll(".accordeon-section__two")
    .forEach(function (section) {
      section.querySelector(".accordeon-body__two").style.maxHeight = "0px";
      section.querySelectorAll(".accordion-arrow__two").forEach((itemImg) => {
        itemImg.style.transform = "rotate(180deg)";
      });
    });

  const accordeonSection = e.target.closest(".accordeon-section__two");

  const insideElHeight = accordeonSection.querySelector(
    ".accordeon-body__two > *"
  ).clientHeight;

  accordeonSection.querySelector(".accordeon-body__two").style.maxHeight =
    insideElHeight + "px";
    accordeonSection.querySelector(".accordion-arrow__two").style.transform =
    "rotate(0deg)";
};

document
  .querySelectorAll(".accordeon-section__two")
  .forEach(function (section) {
    section.addEventListener("click", accordeonHeaderClickHandlerTwo);
  });

const swiper = new Swiper(".swiper-reviews", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
