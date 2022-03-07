// alert("Velkommen til din shoppingliste!")
// alert(
//   "Her kan du legge til varer du trenger, har nok av, pris på varer og fjerne varer du har handlet ferdig eller ikke trenger mer av"
// );

var groceries = document.getElementById("groceries");
var items1 = document.getElementById("items1");
var items2 = document.getElementById("items2");
var items3 = document.getElementById("items3");

itemArray1 = [];
itemArray2 = [];
itemArray3 = [];

//input felt 1

function addItem1() {
  let userInput1 = document.getElementById("user-input-1").value;

  itemArray1.push({
    items1: userInput1,
  });

  listItems1();
}

function listItems1() {
  items1.innerHTML = "";
  for (let i = 0; i < itemArray1.length; i++)
    items1.innerHTML += `<li>
        <h3>${itemArray1[i].items1}</h3><button id="delete" onclick="deleteItems1(${i})">Slett</button>
      </li>`;
}

//input felt 2

function addItem2() {
  let userInput2 = document.getElementById("user-input-2").value;

  itemArray2.push({
    items2: userInput2,
  });

  listItems2();
}

function listItems2() {
  items2.innerHTML = "";
  for (let i = 0; i < itemArray2.length; i++)
    items2.innerHTML += `<li>
        <h3>${itemArray2[i].items2}</h3><button id="delete" onclick="deleteItems2(${i})">Slett</button>
      </li>`;
}

//input felt 3

function addItem3() {
  let userInput3 = document.getElementById("user-input-3").value;
  let priceInput = document.getElementById("price-input").value;

  itemArray3.push({
    items3: userInput3,
    price: priceInput,
  });

  listItems3();
}

function listItems3() {
  items3.innerHTML = "";
  for (let i = 0; i < itemArray3.length; i++)
    items3.innerHTML += `<li>
        <h3>${itemArray3[i].items3}</h3>
      </li> <li>
        <h3>${itemArray3[i].price}</h3>
      <button id="delete" onclick="deleteItems3(${i})">Slett</button></li>`;
}

//slett 1

function deleteItems1(i) {
  if (prompt("Vil du slette vare? ja/nei") == "ja") {
    itemArray1.splice(i, 1);
    listItems1();
  } else if ("nei") {
  }
}
//slett 2

function deleteItems2(i) {
   if (prompt("Vil du slette vare? ja/nei") == "ja") {
    itemArray2.splice(i, 1);
    listItems2();
  } else if ("nei") {
  }
}


//slett 3

function deleteItems3(i) {
   if (prompt("Vil du slette vare? ja/nei") == "ja") {
    itemArray3.splice(i, 1);
    listItems3();
  } else if ("nei") {
  }
}

