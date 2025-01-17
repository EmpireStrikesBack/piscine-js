import {styles} from "./pimp-my-style.data.js";
var counter = 0;

function pimp(){
    var button = document.querySelector("button.button");
    if (!button.classList.contains("unpimp")){
        if (counter < styles.length){
            button.classList.add(styles[counter]);
            counter++;
        } 
    } else {
        if (counter > 0){
            counter--;
            button.classList.remove(styles[counter]);
        }
        if (counter === 0){
            button.classList.toggle("unpimp");
        }
    }
    if (counter === styles.length){
        button.classList.toggle("unpimp");
    }
}

export {pimp};