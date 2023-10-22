window.onload = function(){
    tic_tac();
} 
let n_Game = document.getElementsByClassName("btn");

function tic_tac(){
    const tab = document.getElementById("board")
    const tile = tab.querySelectorAll("div").classList;
    tile.add("#board");
    tile.add("square");
}


