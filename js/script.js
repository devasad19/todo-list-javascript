
// select elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const line_through = "line-through";
// variables
let item;
let id;

let data = localStorage.getItem("TODO");

if(data){
	item = JSON.parse(data);
	id = item.length;
	loadList(item);
}else{
	item = [];
	id = 0;
}

function loadList(array){
	array.forEach(function(list){
		addToDo(list.name, list.id, list.done, list.trash);
	})
}


// show date

const today = new Date();
const date_option = {weekday:"long", month:"short", day:"numeric"}

dateElement.innerHTML = today.toLocaleDateString("en-US", date_option);

function addToDo(todo, id, done, trash){
		if(trash){ return ; }
		const DONE = done ? check : uncheck;
		const LINE = done ? line_through : "";
	const text = `<li>
						<i class="fa ${DONE} co" job="complete" title="complete" id="${id}"></i>
						<p class="text ${LINE}" job="">${todo}</p>
						<i class="fa fa-trash-o de" job="remove" title="remove" id="${id}"></i>
					</li>

				`;
	const position = "beforeend";
	list.insertAdjacentHTML(position, text);
}

// addToDo("30mn workout at morning");

// add an item to the list from user enter

document.addEventListener("keyup", function(event){
	if(event.keyCode == 13){
		const toDo = input.value;

		if(toDo){
			addToDo(toDo, id, false, false);
			item.push({
					name: toDo,
					id: id,
					done: false,
					trash: false		
			});

			localStorage.setItem("TODO", JSON.stringify(item));
			id++;
		}
		input.value = "";
	}
});

function comleteToDo(element){
	element.classList.toggle(check);
	element.classList.toggle(uncheck);
	element.parentNode.querySelector(".text").classList.toggle(line_through);

	item[element.id].done = item[element.id].done ? false: true;
}

function removeToDo(element){
	element.parentNode.parentNode.removeChild(element.parentNode);
item[element.id].trash = true;
}


list.addEventListener("click", function(event){
	const element = event.target;

	const elementJob = element.attributes.job.value;

	if(elementJob == "complete"){
		comleteToDo(element);
	}else if(elementJob == "remove"){
		removeToDo(element);
	}


	localStorage.setItem("TODO", JSON.stringify(item));
})

// all clear
clear.addEventListener("click", function(){
	localStorage.clear();
	location.reload();
});
