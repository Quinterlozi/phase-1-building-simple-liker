// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like-glyph");
const modal = document.querySelector("#modal");
const modalMessage = document.querySelector("#modal-message");

// Hide the error modal initially
modal.classList.add("hidden");

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        // If the server returns a success status, change the heart to a full heart
        button.classList.toggle("activated-heart");
        button.textContent = "♥";
      })
      .catch(() => {
        // If the server returns a failure status, display the error modal and message
        modal.classList.remove("hidden");
        modalMessage.textContent = "Random server error. Please try again later.";

        // Hide the error modal after 3 seconds
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
