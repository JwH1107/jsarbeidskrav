//alert("Velkommen til din shoppingliste!")
//alert(
//  "Her kan du legge til varer du trenger, har nok av, pris på varer og fjerne varer du har handlet ferdig eller ikke trenger mer av"
//);

var groceries = document.getElementById("groceries");
var items = document.getElementById("items");

itemArray = [];

function addItem() {
  let userInput = document.getElementById("user-input").value;

  itemArray.push({
    name: userInput,
  });

  console.log("nytt array", itemArray);
  listItems();
}

function listItems() {
  for (let i = 0; i < itemArray.length; i++)
    items.innerHTML = `<li>
        <h3>${itemArray[i].name}</h3>
      </li>`;
}
