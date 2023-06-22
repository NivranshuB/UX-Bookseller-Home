//Written by: Nivranshu Bose | 27-05-2021
//Script to create modal window for the registration form of index.html

// Get the modal
var modal = document.getElementById("bookclubrego");

// Get the button that opens the modal
var btn = document.getElementById("trigger-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}