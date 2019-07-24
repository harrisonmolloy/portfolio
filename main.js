window.onload = function() {
  console.log("Window loaded Up BB");

  // slider func
  let imgName = "Harrison-Knight-Molloy-Portfolio-Slide-"
  let imgExt = ".jpg"
  let imgIndex = 0

  let slider = document.getElementByID("slide-js");

  function nextSlide(n) {
    if (n <= 66) {
      n++
      slider.src = imgName + n + imgExt;
      return console.log("Next slide");
    } else {
      n = 1
      slider.src = imgName + n + imgExt;
      return console.log("Back to first slide");
    }
  }

  function prevSlide(n) {
    if (n > 1) {
      n--
      slider.src = imgName + n + imgExt;
      return console.log("Prev slide");
    } else {
      n = 66
      slider.src = imgName + n + imgExt;
      return console.log("loop to last slide");
    }
  }

  slider.addEventListener("click", nextSlide(imgIndex));
};
