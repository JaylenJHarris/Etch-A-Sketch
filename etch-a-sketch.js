function makeRows (size){
    let container = document.querySelector('.container');
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let total = size * size

    for(let i = 0; i < total; i++){
        let cell = document.createElement('div');
        cell.className = 'pickle';
        cell.style.backgroundColor = 'red';
        container.appendChild(cell)
    };
};
makeRows(52)