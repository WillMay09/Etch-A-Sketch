

/*populating the content div with smaller divs that will serve as the blocks in which
  the user can color*/

  let GRID_WIDTH = 800; //width of the drawing board
  let GRID_HEIGHT = 800;
//default number of squares is 16
function populateGrid(squareNumber = 16){

let sizeOfSquare = GRID_WIDTH/squareNumber;
let area = squareNumber*squareNumber;
const contentDiv = document.querySelector(".content");

for(let i=0; i<area;i++){

let newDiv = document.createElement('div');
newDiv.classList.add('grid-div');
newDiv.style.width = sizeOfSquare + "px";
newDiv.style.height = sizeOfSquare + "px";
contentDiv.appendChild(newDiv);

}

addHoverEffect();

}

//adds hovered css class to each div, causing them to change color, acting like a marker
function addHoverEffect(){

  let hoverEffect =document.querySelectorAll('.grid-div');
  hoverEffect.forEach(function(hoverEffect){
  
  hoverEffect.addEventListener('mouseover', function(){
  
    hoverEffect.classList.add('hovered');
  })
  
  })


}


function calculateGridSize(){
  let generateButton = document.querySelector('.squareSize')
  

  generateButton.addEventListener('click',function(){

    let textField = document.querySelector('.numberOfSquares').textContent;
    populateGrid(textField);
   
    
    //Calc div size



  })

  //console.log(textField);


}



function playGame(){

    populateGrid();
    calculateGridSize();


}

playGame();