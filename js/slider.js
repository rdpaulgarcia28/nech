const $container_first = document.querySelector("#container_first");
const $container_second = document.querySelector("#container_second");
const $container_third = document.querySelector("#container_third");

const $firstBtnLeft = document.querySelector("#firstBtnLeft");
const $firstBtnRight = document.querySelector("#firstBtnRight");

const $secondBtnLeft = document.querySelector("#secondBtnLeft");
const $secondBtnRight = document.querySelector("#secondBtnRight");

const $thirdBtnLeft = document.querySelector("#thirdBtnLeft");
const $thirdBtnRight = document.querySelector("#thirdBtnRight");

function moveFirstSliderLeft() {
  let $sliders = document.querySelectorAll("#products_slide");
  let $firstSlide = $sliders[0];
  $container_first.insertAdjacentElement("beforeend", $firstSlide);
}
function moveFirstSliderRight() {
  let $sliders = document.querySelectorAll("#products_slide");
  let $lastSlide = $sliders[$sliders.length - 1];
  $container_first.insertAdjacentElement("afterbegin", $lastSlide);
}
$firstBtnLeft.addEventListener("click", function () {
  moveFirstSliderLeft();
});

$firstBtnRight.addEventListener("click", function () {
  moveFirstSliderRight();
});

// SEGUNDO SLIDER
function moveSecondSliderLeft() {
  let $sliders = document.querySelectorAll("#products_slide_second");
  let $secondSlide = $sliders[0];
  $container_second.insertAdjacentElement("beforeend", $secondSlide);
}
function moveSecondSliderRight() {
  let $sliders = document.querySelectorAll("#products_slide_second");
  let $lastSlide = $sliders[$sliders.length - 1];
  $container_second.insertAdjacentElement("afterbegin", $lastSlide);
}
$secondBtnLeft.addEventListener("click", function () {
  moveSecondSliderLeft();
});

$secondBtnRight.addEventListener("click", function () {
  moveSecondSliderRight();
});

// SEGUNDO SLIDER
function moveThirdSliderLeft() {
  let $sliders = document.querySelectorAll("#products_slide_third");
  let $thirdSlide = $sliders[0];
  $container_third.insertAdjacentElement("beforeend", $thirdSlide);
}
function moveThirdSliderRight() {
  let $sliders = document.querySelectorAll("#products_slide_third");
  let $lastSlide = $sliders[$sliders.length - 1];
  $container_third.insertAdjacentElement("afterbegin", $lastSlide);
}
$thirdBtnLeft.addEventListener("click", function () {
  moveThirdSliderLeft();
});

$thirdBtnRight.addEventListener("click", function () {
  moveThirdSliderRight();
});
