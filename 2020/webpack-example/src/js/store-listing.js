import { updateUI } from "./update-ui";
import "../css/store-listing.css";

var listingElements = ["apple", "orange"];
var storeElements = [];

// логика JS, не связана с DOM
function addToStoreElements(element) {
  var elementPosition = listingElements.indexOf(element);
  if (elementPosition > -1) {
    storeElements.push(element);
    listingElements.splice(elementPosition, 1);
  }
}

// регистрируем события
var addButton = document.querySelector("#add-button");

addButton.onclick = function () {
  var selectedOption = document.querySelector(".listing-select option:checked");
  addToStoreElements(selectedOption.innerText);
  updateUI(listingElements, storeElements);
};
