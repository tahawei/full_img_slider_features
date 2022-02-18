// Collecting Data
const carouselImages = document.querySelector(".carousel__images");
const carouselWidth = document.querySelectorAll(".carousel__images img")[0]
  .clientWidth;
const carouselButtons = document.querySelectorAll(".carousel__button");
const numberOfImages = document.querySelectorAll(
  ".carousel__images img"
).length;
let imageIndex = 1;
let translateX = 0;
const bulletsContainer = document.querySelector(".bullets-container");
// Add class disabled in basicly
carouselButtons[0].classList.add("disabled");

// Buttons Function
carouselButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "previous") {
      if (imageIndex !== 1 /* I mean It is not frist one */) {
        imageIndex--;
        translateX += carouselWidth;
        // Add Class disabled
        carouselButtons[1].classList.remove("disabled");
      }

      // Check if the current element is the frist one
      if (imageIndex === 1) {
        event.target.classList.add("disabled");
      }
    } else if (event.target.id === "next") {
      if (imageIndex !== numberOfImages /* I mean It is not last one */) {
        imageIndex++;
        translateX -= carouselWidth;
        // Remove Class disabled
        carouselButtons[0].classList.remove("disabled");
      }

      // Check if the current element is the last one
      if (imageIndex === numberOfImages) {
        // Add Class disabled
        event.target.classList.add("disabled");
      }
    }

    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});

// Add pagination bullets
// Create The Main Ul Element
let paginationUl = document.createElement("ul");

// Set Id On Created Ul Element
paginationUl.setAttribute("id", "pagination-ul");

// create li
for (
  let i = 0;
  i <
  numberOfImages /* Do not type length because the length is written in the variable of numberOfImages */;
  i++
) {
  let paginationElements = document.createElement("li");

  // Set Custom Attribute
  paginationElements.setAttribute("data-index", i);

  // Append Items To The Main Ul List
  paginationUl.appendChild(paginationElements);
}

// Add The Created Ul Element To The Page
document.querySelector(".bullets-container").appendChild(paginationUl);

// Get The New Created Ul
let paginationCreatedUl = document.getElementById("pagination-ul");

let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop Through All Pagination Bullets

for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    removeAllActive();
    this.classList.add("active");
    carouselImages.style.transform = `translateX(${i * translateX}px)`;
  };
}

// Remove All Active Classes From Images And Pagination bullets
function removeAllActive() {
  // Loop Through Pagination Bullets
  paginationBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}

// bullets left !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!???????????????????????
