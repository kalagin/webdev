// updateUI берет данные из массивов и занимается вставкой
export function updateUI(listingElements, storeElements) {
  var storeSelect = document.querySelector(".store-select");
  var listingSelect = document.querySelector(".listing-select");
  storeSelect.innerHTML = "";
  listingSelect.innerHTML = "";

  for (var i = 0; i < listingElements.length; i++) {
    var newOption = document.createElement("option");
    newOption.innerText = listingElements[i];
    listingSelect.append(newOption);
  }

  for (var i = 0; i < storeElements.length; i++) {
    var newOption = document.createElement("option");
    newOption.innerText = storeElements[i];
    storeSelect.append(newOption);
  }
}
