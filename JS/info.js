function showLarge(e){
    let small = e.target ;
    document.getElementById("large").src = small.src ;
}

function init(){
    let smalls = document.getElementsByClassName("pic-s");
    let txts = document.getElementsByClassName("txt");

    for(let i = 0 ; i < smalls.length ; i++){
        smalls[i].onclick = showLarge ;
    }

}

window.addEventListener("load", init, false);

