var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function addToDoneList(event) {
  if (event.target.tagName.toLowerCase() === "li") {
    event.target.classList.toggle("done");
  }
}

function addDeleteButton(event) {
  var listItem = event.target;
  var deleteBtn = listItem.querySelector("button");
  if (listItem.tagName.toLowerCase() === "li" && !deleteBtn) {
    deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    listItem.appendChild(deleteBtn);
  }
}

function removeDeleteButton(event) {
  var listItem = event.target;
  var deleteBtn = listItem.querySelector("button");
  if (listItem.tagName.toLowerCase() === "li" && deleteBtn && !listItem.contains(event.relatedTarget)) {
    listItem.removeChild(deleteBtn);
  }
}

function deleteItem(event) {
  if (event.target.tagName.toLowerCase() === "button") {
    var deleteBtn = event.target;
    var listItem = deleteBtn.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", addToDoneList);
ul.addEventListener("mouseover", addDeleteButton);
ul.addEventListener("mouseout", removeDeleteButton);
ul.addEventListener("click", deleteItem);