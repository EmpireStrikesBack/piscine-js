let lastCircle;
let isCaptured = false;

export const createCircle = () => {
    const body = document.querySelector("body");

    document.addEventListener("click", (event) => {
        const point = document.createElement("div");
        const circleRadius = 25; // La moitié de 50px

        point.classList.add("circle");

        point.style.position = "absolute";
        point.style.top = `${event.clientY - circleRadius}px`;
        point.style.left = `${event.clientX - circleRadius}px`;

        point.style.background = "white";
        point.style.width = `${circleRadius * 2}px`;
        point.style.height = `${circleRadius * 2}px`;
        point.style.borderRadius = "50%";

        lastCircle = point;
        isCaptured = false;

        body.appendChild(point);
    });
};

export const moveCircle = () => {
    document.addEventListener("mousemove", (event) => {
        if (!lastCircle) return;

        const box = document.querySelector(".box");
        if (!box) return;

        const boxRect = box.getBoundingClientRect();
        const circleRadius = 25;

        // Position actuelle de la souris
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Vérifier si la souris est dans les limites de la box (avec marge pour le rayon)
        const insideX = mouseX > boxRect.left + circleRadius && mouseX < boxRect.right - circleRadius;
        const insideY = mouseY > boxRect.top + circleRadius && mouseY < boxRect.bottom - circleRadius;
        const isInside = insideX && insideY;

        if (isInside && !isCaptured) {
            isCaptured = true;
            lastCircle.style.background = "var(--purple)";
        }

        if (isCaptured) {
            // Calculer la nouvelle position en respectant les limites
            let newX = mouseX;
            let newY = mouseY;

            if (!insideX) {
                newX = mouseX < boxRect.left + circleRadius
                    ? boxRect.left + circleRadius
                    : boxRect.right - circleRadius;
            }

            if (!insideY) {
                newY = mouseY < boxRect.top + circleRadius
                    ? boxRect.top + circleRadius
                    : boxRect.bottom - circleRadius;
            }

            lastCircle.style.left = `${newX - circleRadius}px`;
            lastCircle.style.top = `${newY - circleRadius}px`;
        } else {
            // Si pas capturé, suivre librement la souris
            lastCircle.style.left = `${mouseX - circleRadius}px`;
            lastCircle.style.top = `${mouseY - circleRadius}px`;
        }
    });
};

export const setBox = () => {
    const body = document.querySelector("body");
    const box = document.createElement("div");

    box.classList.add("box");

    box.style.position = "absolute";
    box.style.top = "50%";
    box.style.left = "50%";
    box.style.transform = "translate(-50%, -50%)";
    box.style.width = "300px";
    box.style.height = "300px";
    box.style.border = "1px solid white";

    body.appendChild(box);
};