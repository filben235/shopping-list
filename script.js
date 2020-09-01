var button= document.getElementById("enter");
// var clearButton = document.getElementById("clear");
var input= document.getElementById("userInput");
var ul= document.querySelector("ul");
var listItems= document.getElementsByTagName("li");

function inputTruthy() {
	//kollar om input.value är "truthy", alltså att det inte är null, undefined, NaN, 0, false osv...
	return input.value;
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function createListElement() {
	if (inputTruthy()) {
		input.placeholder="Enter items";
		var li= document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
		var btn= document.createElement("button");
		btn.appendChild(document.createTextNode("Delete!"));
		li.appendChild(btn);
 		btn.onclick = removeParent;
	} else {
		input.placeholder = "Invalid input!";
	}
	input.focus();
}

button.addEventListener("click", function( ) {
	createListElement();
})

// clearButton.addEventListener("click", function() {
// 	document.getElementById("list").innerHTML = "";
// })

input.addEventListener("keypress", function() {
	if (event.keyCode === 13) {
		createListElement();
	}
})

function listLength(){
	return listItems.length;
}

function deleteButton(){
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(btn);
	btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){
	deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
}
