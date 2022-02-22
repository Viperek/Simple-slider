// Create array and assigment img
const images = [];
images[0] = "./assets/history1.jpg";
images[1] = "./assets/history2.jpg";
images[2] = "./assets/history3.jpg";
images[3] = "./assets/history4.jpg";
images[4] = "./assets/history5.jpg";
images[5] = "./assets/history6.jpg";
images[6] = "./assets/history7.jpg";

// get
const showingImage = document.querySelector(".image");

// set start number of slider iteration
var startIndex = 0;

// showing image
showImg(startIndex);

//
function showImg(n) {
  if (n > images.length - 1) {
    startIndex = 0;
    n = 0;
  }
  if (n < 0) {
    startIndex = images.length - 1;
    n = images.length - 1;
  }
  showingImage.setAttribute("src", images[n].toString());
  console.log(images.length, n, startIndex);
}

// function to show next image
function nextImg(n) {
  showImg((startIndex += n));
}

// function to show previous image
function prevImg(n) {
  showImg((startIndex -= n));
}
