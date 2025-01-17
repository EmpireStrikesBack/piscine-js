import { gossips } from "./gossip-grid.data.js";

function grid() {
    // Ranges
    ranges();

    // First gossip card, with a form to add new gossips
    let form = document.createElement("form");
    form.classList.add("gossip");
    let textarea = document.createElement("textarea");
    let button = document.createElement("button");
    button.innerHTML = "Share gossip!";
    button.type = "submit";
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let gossip = textarea.value;
        if (gossip.length > 0) {
            gossips.unshift(gossip);
            renderGossips(); // Re-render only the gossip cards
            textarea.value = ""; // Clear the textarea after sharing
        }
    });
    form.appendChild(textarea);
    form.appendChild(button);
    document.body.appendChild(form); // Add the form to the document

    // Initially render the gossip cards
    renderGossips();
}

function renderGossips() {
    // Clear all previous gossip cards except the form
    const form = document.querySelector(".gossip");
    const allCards = document.querySelectorAll(".gossip:not(form)");

    // Remove all cards except the form
    allCards.forEach(card => card.remove());

    // Create new gossip cards
    gossips.forEach(gossip => {
        let div = document.createElement("div");
        div.classList.add("gossip");
        div.innerHTML = gossip;
        document.body.appendChild(div);
    });
}

function ranges() {
    let ranges = document.createElement("div");
    ranges.classList.add("ranges");

    // Width range
    let widthRange = document.createElement("input");
    widthRange.type = "range";
    widthRange.id = "width";
    widthRange.min = "200";
    widthRange.max = "800";
    widthRange.value = localStorage.getItem('width') || "400";  // Persist value
    widthRange.addEventListener("input", (e) => {
        let cards = document.querySelectorAll(".gossip");
        cards.forEach((card) => {
            card.style.width = e.target.value + "px";
        });
        localStorage.setItem('width', e.target.value);  // Save to localStorage
    });

    // Font size range
    let fontSizeRange = document.createElement("input");
    fontSizeRange.type = "range";
    fontSizeRange.id = "fontSize";
    fontSizeRange.min = "20";
    fontSizeRange.max = "40";
    fontSizeRange.value = localStorage.getItem('fontSize') || "30";
    fontSizeRange.addEventListener("input", (e) => {
        let cards = document.querySelectorAll(".gossip");
        cards.forEach((card) => {
            card.style.fontSize = e.target.value + "px";
        });
        localStorage.setItem('fontSize', e.target.value);
    });

    // Background color range
    let backgroundColorRange = document.createElement("input");
    backgroundColorRange.type = "range";
    backgroundColorRange.id = "background";
    backgroundColorRange.min = "20";
    backgroundColorRange.max = "75";
    backgroundColorRange.value = localStorage.getItem('background') || "50";
    backgroundColorRange.addEventListener("input", (e) => {
        let cards = document.querySelectorAll(".gossip");
        cards.forEach((card) => {
            card.style.backgroundColor = `hsl(280, 50%, ${e.target.value}%)`;
        });
        localStorage.setItem('background', e.target.value);
    });

    // Append ranges to the DOM
    ranges.appendChild(widthRange);
    ranges.appendChild(fontSizeRange);
    ranges.appendChild(backgroundColorRange);
    document.body.appendChild(ranges);
}

export { grid };