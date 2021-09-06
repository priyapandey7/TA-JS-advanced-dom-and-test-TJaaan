// const mainBox = document.querySector("ul");

// function fetchQuotes() {
//   for (let index = 0; index < arr.length; index++) {
//     // const element = array[index];
//   }
// }
// let root = document.querySelector("ul");

// fetchQuotes();

let listElm = document.querySelector("#Adding-list");

// Add items.
var loadMore = function () {
  for (let i = 0; i < quotes.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = `<blockquote>${quotes[i].quoteText}</blockquote>
    <p>${quotes[i].quoteAuthor}</p>
    `;
    listElm.appendChild(item);
  }
};

// Detect when scrolled to bottom.
listElm.addEventListener("scroll", function () {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

// Initially load some items.
loadMore();

window.addEventListener("DOMContentLoaded", (event) => {
  alert("The content of the DOM is loaded");
});
