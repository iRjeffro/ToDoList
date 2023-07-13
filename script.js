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
	if (event.target.tagName.toLowerCase() === "li") {
	  var trashBtnAdd = document.createElement("button");
	  trashBtnAdd.appendChild(document.createTextNode("X"));
	  event.target.appendChild(trashBtnAdd);
	}
}

function removeDeleteButton(event) {
	if (event.target.tagName.toLowerCase() === "li") {
	  var deleteBtn = event.target.querySelector("button");
	  if (deleteBtn) {
		event.target.removeChild(deleteBtn);
	  }
	}
}

function deleteItem(event) {
	if (event.target.tagName.toLowerCase() === "button") {
	  var listItem = event.target.parentNode;
	  listItem.parentNode.removeChild(listItem);
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", addToDoneList);
ul.addEventListener("mouseover", addDeleteButton);
ul.addEventListener("mouseout", removeDeleteButton);
ul.addEventListener("click", deleteItem);
