window.addEventListener('load', function () {
  console.log("Window has loaded");

  var imgName = "/images/Harrison-Knight-Molloy-Portfolio-Slide-";
  var imgExt = ".jpg";
  var imgIndex = 1;

  let slider = document.getElementById("slider-js")
  let nextSlideBtn = document.getElementById("nextSlideBtn-js");

  function nextSlide() {
    console.log("Next slide was fired");
    if (imgIndex == 66) {
      imgIndex = 1;
      slider.src = imgName + imgIndex + imgExt;
    } else {
      imgIndex++
      slider.src = imgName + imgIndex + imgExt;
    }
  }

  nextSlideBtn.addEventListener("click", nextSlide);
}, false);
