window.onload = function(){
    tic_tac();
} 
let n_Game = document.getElementsByClassName("btn");

function tic_tac(){
    const tab = document.querySelector("#board > div").classList;
    tab.add("#board");
    tab.add("square");
}


