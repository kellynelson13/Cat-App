//Make a call to the api and render the breed, img, description, and temperament
//The description and temerapemnt should only be rendered after someone clicks the modal to get more info
//IF the breed has a picture, render it's info
////////////////
////Variables///
////////////////
const catButton = document.getElementById("catBtn");
const breed = document.getElementById("breed");
const picture = document.getElementById("picture");
const openBtn = document.getElementById("open");
const modalContainer = document.getElementById("modal-container");
const modal = document.getElementById("modal");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const closeBtn = document.getElementById("close");
const openBtnDiv = document.getElementById("openBtnDiv");

//////////////
//Click Events
/////////////
catButton.addEventListener("click", handleKittyBtn);
openBtn.addEventListener("click", handleOpenModal);
closeBtn.addEventListener("click", handleCloseModal);

////////////
//Functions
///////////

function handleKittyBtn(e) {
  e.preventDefault();
  $.ajax("https://api.thecatapi.com/v1/breeds").then(
    function (data) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (data[randomIndex].id === "ebur" || data[randomIndex].id === "mala") {
        handleKittyBtn();
      } else {
        breed.innerHTML = data[randomIndex].name;
        picture.innerHTML = `<img src=${data[randomIndex].image.url} >`;
        openBtnDiv.innerHTML =
          '<button id="open">Click for more kitty info</button>';
        temp.textContent = data[randomIndex].temperament;
        description.textContent = data[randomIndex].description;
        console.log(data);
        openBtnDiv.addEventListener("click", handleOpenModal);
        closeBtn.addEventListener("click", handleCloseModal);
      }
    },
    function (error) {
      console.log("Something went terribly wrong");
    }
  );
}

function handleOpenModal() {
  modalContainer.classList.add("show");
}
function handleCloseModal() {
  modalContainer.classList.remove("show");
}

