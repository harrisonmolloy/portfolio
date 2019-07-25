window.addEventListener('load', function () {
  console.log("Window has loaded");

  var imgName = "/images/Harrison-Knight-Molloy-Portfolio-Slide-";
  var imgExt = ".jpg";
  var imgIndex = 1;
  let slider = document.getElementById("slider-js")

  function nextSlide() {
    console.log("nextSlide() was fired");
    if (imgIndex == 66) {
      imgIndex = 1;
      slider.src = imgName + imgIndex + imgExt;
    } else {
      imgIndex++
      slider.src = imgName + imgIndex + imgExt;
    }
  }

  function prevSlide() {
    console.log("prevSlide() was fired");
    if (imgIndex == 1) {
      imgIndex = 66;
      slider.src = imgName + imgIndex + imgExt;
    } else {
      imgIndex--
      slider.src = imgName + imgIndex + imgExt;
    }
  }

  document.addEventListener("click", function (e) {
    if (e.x > window.outerWidth / 2 && e.y > 60) {
      nextSlide();
    } else if (e.y > 60){
      prevSlide();
    }
  });

}, false);
