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
	var listItem = document.querySelectorAll("li");
	var trashBtn = document.createElement("button");
	trashBtn.appendChild(document.createTextNode("X"));
	if (event.target.childNodes.length <= 1 && event.target.tagName.toLowerCase() === "li") {
		event.target.appendChild(trashBtn);
	}
}

function removeDeleteButton(event) {
	var listItem = document.querySelectorAll("li");
	var trashBtn = document.createElement("button");
	event.target.removeChild(trashBtn);
}

function deleteItem(event) {
	if (event.target.tagName.toLowerCase() === "button") {
		event.target.removeEventListener("click", removeParent);
		event.target.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", addToDoneList);

ul.addEventListener("mouseover", addDeleteButton);

ul.addEventListener("mouseleave", removeDeleteButton);