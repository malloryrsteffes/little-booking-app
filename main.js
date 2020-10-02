// Select our DOM objects

const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const selectedMovie = document.getElementById("movie");
let ticket_price = +selectedMovie.value;

// Update how many seats are selected
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatCount = selectedSeats.length;
  count.innerText = seatCount;
  total.innerText = seatCount * ticket_price;
}

// Grab the container and add the Event Listener onto it
container.addEventListener("click", e => {
  console.log(total);
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});
