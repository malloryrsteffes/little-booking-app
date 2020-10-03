// Select our DOM objects

const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const selectedMovie = document.getElementById("movie");

populateUI();

let ticket_price = +selectedMovie.value;

// Save movie data
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}
// Update how many seats are selected
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  // Copy selected seats into array
  // Map through array
  // Return new array of indexes

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  console.log(seatsIndex);

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatCount = selectedSeats.length;
  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticket_price;
}
// Grab data from local storage and populate UI 
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && sele)
}
// Movie Select Event
selectedMovie.addEventListener("change", e => {
  ticket_price = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Grab the container and add the Event Listener onto it
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});
