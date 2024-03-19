

/*populating the content div with smaller divs that will serve as the blocks in which
  the user can color*/
function populateGrid(){

const contentDiv = document.querySelector(".content");

for(let i=0; i<256;i++){

let newDiv = document.createElement('div');
newDiv.classList.add('grid-div');
contentDiv.appendChild(newDiv);

}
//adds hovered css class to each div, causing them to change color, acting like a marker
let hoverEffect =document.querySelectorAll('.grid-div');
hoverEffect.forEach(function(hoverEffect){

hoverEffect.addEventListener('mouseover', function(){

  hoverEffect.classList.add('hovered');
})

})

}



function playGame(){

    populateGrid();



}

playGame();