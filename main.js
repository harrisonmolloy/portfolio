window.onload = function() {
  console.log("Window loaded Up BB");

  // slider func
  let imgName = "Harrison-Knight-Molloy-Portfolio-Slide-"
  let imgExt = ".jpg"
  let imgIndex = 0

  function nextSlide(n) {
    if (n <= 66) {
      n++
      return imgName + n + imgExt;
    } else {
      n = 0
      return imgName + n + imgExt;
    }
  }

  function prevSlide(n) {
    if (n >= 1) {
      n--
      return imgName + n + imgExt;
    } else {
      n = 66
      return imgName + n + imgExt;
    }
  }

  
};
