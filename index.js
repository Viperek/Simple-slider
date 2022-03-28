// create array and assigment img
const images = [];
images[0] = "./assets/history1.jpg";
images[1] = "./assets/history2.jpg";
images[2] = "./assets/history3.jpg";
images[3] = "./assets/history4.jpg";
images[4] = "./assets/history5.jpg";
images[5] = "./assets/history6.jpg";
images[6] = "./assets/history7.jpg";

// get image selector
const showingImage = document.querySelector(".image");

// get dots selector
const dots = document.querySelector(".slider__dots");

// set start number of slider iteration
var startIndex = 0;

// creating dots
addDivElement();

// showing image
showImg(startIndex);

// function using to showing slids
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
  activeDotElement(n);
}

// function to show next image
const nextSlideImage = (n) => {
  showImg((startIndex += n));
};

// function to show previous image
const previousSlideImage = (n) => {
  showImg((startIndex -= n));
};

// function to add dots
function addDivElement() {
  for (let i = 0; i < images.length; i++) {
    let dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    dot.setAttribute("id", "dot0" + i.toString());
    dots.appendChild(dot);
  }
}

// function to set active element
function activeDotElement(n) {
  let dot;
  if (n < 10) {
    dot = document.querySelector("#dot0" + n.toString());
    //dots.classList.remove("active");
    dot.classList.toggle("active");
  } else {
    dot = document.querySelector("#dot" + n.toString());
    //dot.classList.toggle("active");
  }
  console.log(dot);
}
