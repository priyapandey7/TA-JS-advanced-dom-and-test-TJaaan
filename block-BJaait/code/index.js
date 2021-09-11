let inputText = document.querySelector("#txt");
let btn = document.querySelector(".btn-list");
let list = document.querySelector(".container ul");
var remove = document.querySelector(".draggable");
btn.addEventListener("click", (e) => {
  if (inputText.value != "") {
    e.preventDefault();
    // create list
    let myLi = document.createElement("li");
    myLi.innerHTML = inputText.value;
    list.appendChild(myLi);
  }
});

function dragStart(e) {
  this.style.opacity = "0.8";
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function dragEnter(e) {
  this.classList.btn("over");
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove("over");
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }
  return false;
}

// function addEventsDragAndDrop(el) {
//   el.addEventListener("dragstart", dragStart, false);
//   el.addEventListener("dragenter", dragEnter, false);
//   el.addEventListener("dragover", dragOver, false);
//   el.addEventListener("dragleave", dragLeave, false);
//   el.addEventListener("drop", dragDrop, false);
//   el.addEventListener("dragend", dragEnd, false);
// }
