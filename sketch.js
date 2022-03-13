const draw = document.querySelector('.draw');
const display = document.querySelector('p');
let changesize = document.getElementById('change_size');
changesize.addEventListener('click', changeSize);

//Creating grid
function createGrid(size){
    //Creating variables
    const board = document.querySelector('.board');
    board.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    board.style.gridTemplateRows =`repeat(${size}, 1fr)`;

    let totalSize = size*size;
    for(let i = 0; i<totalSize; i++){
    let gridBox = document.createElement('div');
    gridBox.style.backgroundColor = 'lightgray';
    board.insertAdjacentElement("beforeend", gridBox);
   
    sketch();
    eraser();

    //Sketch OR Draw function
    function sketch(){
        draw.addEventListener('click', () =>{
            gridBox.addEventListener('mouseover',() =>{
                let color = document.getElementById('inputDrawingColor').value;
                gridBox.style.backgroundColor = color;
            })
        })
    }

    //Erase function
    function eraser(){
        let erase = document.querySelector('.delete');
        erase.addEventListener('click', ()=>{
            gridBox.addEventListener('mouseover', ()=>{
                gridBox.style.backgroundColor = 'lightgray';
            })
        })
    }
    
}
}

function changeSize(inputSize){
    if(inputSize >=2 && inputSize <=100){
        createGrid(inputSize);
    }else if(inputSize !=2 && inputSize > 100){
        display.textContent = 'Invalid Input';
    }
}
//Reset function
function reset(){
    window.location.reload();
}
