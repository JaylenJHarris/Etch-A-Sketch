const container = document.querySelector('.container');
let rows = document.getElementsByClassName('box');
/*
let cell = document.createElement('div');
cell.innerHTML = 'Hello world';
container.style.backgroundColor = 'red';
cell.style.border = '1px';
container.appendChild(cell)
*/

//create a function to make a grid of 16 * 16 divs
//you for loop to contionously make the divs until it reaches the desired amount
/*
function make16 () {
    for (var i = 0;i < (16); i++){
        let row  = document.createElement('div');
        row.className = 'box';
        row.textContent = 'hi';
        
        container.appendChild(row)
    }
    for (let i=0; i<rows.length; i++){
        for(let j=0; j<16;j++){
            let column = document.createElement('div');
            column.className = 'column';
            rows.appendChild(column)
        }
    }

}
make16()
*/
function makeRows (rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++){
        let cell = document.createElement('div');
        cell.innerText = 'I am f';
        container.appendChild(cell),className = 'grid-item';
    };
};