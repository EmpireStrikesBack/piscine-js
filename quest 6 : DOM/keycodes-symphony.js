document.addEventListener("keydown", function (event){
    compose(event);
})

function compose(x){
    if (!x) return;
    const key = x.key;
    
    if (key.length === 1 && key >= "a" && key <= "z"){
        const charCode = key.charCodeAt(0);
        const div = document.createElement("div");
        div.classList.add("note");
        const intensity = (255 / 26) * (charCode - 97);
        div.style.backgroundColor = `rgb(${intensity}, ${intensity}, ${intensity})`;
        div.textContent = key;
        document.body.appendChild(div);
    } else if (key === "Backspace") {
        const notes = document.getElementsByClassName("note");
        if (notes.length > 0) {
            notes[notes.length -1].remove();
        }
    } else if (key === "Escape") {
       document.querySelectorAll(".note").forEach((note) => note.remove());
    }
}

export {compose};