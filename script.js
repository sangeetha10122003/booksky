// Select elements
const overlay = document.querySelector(".overlay");
const popupBox = document.querySelector(".popup");
const popupAddButton = document.getElementById("addBtn");
const closeButton = document.getElementById("closePopup");
const addButton = document.getElementById("addBookBtn");
const bookshelf = document.querySelector(".bookshelf");

const bookName = document.getElementById("bookName");
const authorName = document.getElementById("authorName");
const description = document.getElementById("description");

// Show popup
popupAddButton.addEventListener("click", () => {
  overlay.style.display = "block";
  popupBox.style.display = "block";
});

// Close popup
closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  overlay.style.display = "none";
  popupBox.style.display = "none";
  clearInputs();
});

// Add new book
addButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Validate inputs
  if (!bookName.value || !authorName.value || !description.value) {
    alert("Please fill all fields!");
    return;
  }

  // Create book card
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("bookcontainer");

  bookDiv.innerHTML = `
    <h2>${bookName.value}</h2>
    <h5>${authorName.value}</h5>
    <p>${description.value}</p>
    <button class="deleteBtn">Delete</button>
  `;

  // Append to bookshelf
  bookshelf.appendChild(bookDiv);

  // Hide popup
  overlay.style.display = "none";
  popupBox.style.display = "none";

  // Clear fields
  clearInputs();

  // Delete book
  const deleteBtn = bookDiv.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", () => {
    bookDiv.remove();
  });
});

// Clear input fields
function clearInputs() {
  bookName.value = "";
  authorName.value = "";
  description.value = "";
}
