//alert("Velkommen til din shoppingliste!")

const groceries = document.getElementsByClassName("groceries");
const userInput = document.getElementById("userInput");
const addItem = document.getElementById("addItem");

addItem.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("input");
  paragraph.innerText = userInput.value;
  addItem.appendChild(paragraph);
  userInput.value = "";
});
