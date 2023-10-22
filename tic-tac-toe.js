function tic_tac(){
    let tab = document.querySelector("board");
    tab.classList.add("#board");
}
function Square(){
    let square = document.querySelectorAll("board > div");
    for (let i = 0; i < square.length; i++){
        square.classList.add(".square");
    }
}

window.onload = function(){
    tic_tac();
    Square();
}