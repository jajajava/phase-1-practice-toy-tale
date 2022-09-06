let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function getToys(){
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
}

function newToy(toy){
fetch('http://localhost:3000/toys', {
  method: 'POST',
  headers: {'Content-type':'applications/json'},
  body: JSON.stringify({
    "name": toy.name.value,
    "image": toy.image.value,
    "likes": 0

})
})}

function renderToys(){
  (getToys()).forEach(createElement('div.card')

)}