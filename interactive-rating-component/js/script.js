
// Variables for the Ratings card 
const radios = document.querySelectorAll('input')
const userRating = document.querySelector(".user-rating")
const btnSubmit = document.querySelector(".btn-submit")
const successCard = document.querySelector(".success-card")

// Gets the rating and prints it on the Thank You card
function getCheckedValue() {

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            userRating.textContent = radios[i].value;
        }
    }
}

// Gets the rating result to print on the Thank You card
btnSubmit.addEventListener("click", getCheckedValue);
     

// Variables for the  the Overlay
const modal = document.querySelector('#modal')
const openModalButton = document.querySelector('#open-modal-btn')
const closeModalButton = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')


// Adds the open class to the Thank You card and the Overlay
btnSubmit.addEventListener('click', () => {
  successCard.classList.add('open')
    overlay.classList.add('open')
    document.body.style.cursor = "pointer";
})


// Adds the click event to the Thank You card to close the Thank You card and the Overlay
successCard.addEventListener("click", closeModal);

// Adds the click event to the Overlay to close the Thank You card and the Overlay
overlay.addEventListener("click", closeModal);

// Function to close the Thank You card and the Overlay
function closeModal() {
  successCard.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.cursor = "default";
    
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            radios[i].checked = false;
        }
    }
}

