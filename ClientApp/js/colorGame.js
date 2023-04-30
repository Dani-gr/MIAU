const verifyButton = document.getElementById("verify");
const lettersDiv = document.getElementById("letters");
const answerDiv = document.getElementById("answer");
const colorDisplay = document.getElementById("color-display");
const progressBar = document.getElementById("progress-bar");

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "aqua",
    "blue",
    "purple"
]
let color;
let letters;
let num = 0;
colors.sort(function () { return Math.random() - 0.5; });
progressBar.setAttribute("aria-valuemax", colors.length);

startGame = function () {
    progressBar.setAttribute("aria-valuenow", num);
    progressBar.style.width = (num / colors.length * 100).toFixed(2) + "%";

    // Seleccionar el color y las letras
    if (num >= colors.length) return;
    color = colors[num];

    letters = color.split("");
    letters.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    letters.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));

    letters.sort(function () { return Math.random() - 0.5; });

    colorDisplay.style.backgroundColor = color;
    answerDiv.style.backgroundColor = "#fff";

    translate = function (string) {
        let name;
        switch (string) {
            case "red":
                name = "Rojo";
                break;
            case "orange":
                name = "Naranja";
                break;
            case "yellow":
                name = "Amarillo";
                break;
            case "green":
                name = "Verde";
                break;
            case "aqua":
                name = "Aqua";
                break;
            case "blue":
                name = "Azul";
                break;
            case "purple":
                name = "Morado";
                break;
        }
        return name;
    }
    colorDisplay.innerText = translate(color);
    colorDisplay.style.color = color === "blue" || color === "purple" ? "aliceblue" : "black";


    // Eliminar las letras anteriores
    for (let i = lettersDiv.childElementCount - 1; i >= 0; i--)
        lettersDiv.children[i].remove();

    // Agregar letras al contenedor de letras
    for (let i = 0; i < letters.length; i++) {
        const letter = document.createElement("div");
        letter.setAttribute("class", "letter");
        letter.setAttribute("draggable", "true");
        letter.innerHTML = letters[i].toUpperCase();
        letter.id = "letter-" + i;
        lettersDiv.append(letter);
    }

    // Establecer los tamaños según el número de letras
    lettersDiv.style.width = 50 * letters.length + 20 + "px";
    answerDiv.style.width = 50 * color.length + 20 + "px";

    // Eliminar los espacios anteriores
    for (let i = answerDiv.childElementCount - 1; i >= 0; i--)
        answerDiv.children[i].remove();

    // Crear los espacios para la respuesta
    for (let i = 0; i < color.length; i++) {
        const answerSpace = document.createElement("div");
        answerSpace.className = "answer-space";
        answerSpace.id = "answer-space-" + i;
        answerDiv.appendChild(answerSpace);
    }

    // Hacer que todas las letras sean arrastrables
    document.querySelectorAll('.letter').forEach(function (value) {
        value.addEventListener('dragstart', function (e) {
            e.dataTransfer.setData('text', this.id);
        });
    });

    // Añadir evento de click a todas las letras
    document.querySelectorAll('.letter').forEach(function (value) {
        value.addEventListener('click', function () {
            moveAuto(this);
        });
    });
}

document.addEventListener('dragover', function (e) {
    e.preventDefault();
});

document.addEventListener('drop', function (e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    const droppedLetter = document.getElementById(data);

    // Obtener el elemento donde se soltó la letra
    const space = e.target;

    move(space, droppedLetter);
});

moveAuto = function (clickedLetter) {
    if (num >= colors.length) return;
    if (clickedLetter.parentNode === lettersDiv) {
        // Buscar un espacio libre en la respuesta
        buscarLibre = function () {
            for (let i = 0; i < answerDiv.childElementCount; i++)
                if (answerDiv.children[i].childElementCount === 0) return answerDiv.children[i];
            return null;
        }
        space = buscarLibre();
        if (space == null) return;
        move(space, clickedLetter);
    } else {
        // Quitar la letra y devolverla 
        move(lettersDiv, clickedLetter);
    }
}

move = function (space, droppedLetter) {
    if (num >= colors.length) return;
    if (space.getAttribute("class") === "answer-space") {
        // Mover la letra al espacio de respuesta correspondiente
        droppedLetter.parentNode.removeChild(droppedLetter);
        space.appendChild(droppedLetter);
    } else if (droppedLetter.parentNode !== lettersDiv && (space.getAttribute("class") !== "letter" || space.parentNode === lettersDiv)) {
        // Quitar la letra y devolverla 
        droppedLetter.parentNode.removeChild(droppedLetter);
        lettersDiv.appendChild(droppedLetter);
    } else return;

    // Según el número de letras colocadas, se activa o no el botón
    let n = 0;
    for (let i = 0; i < answerDiv.childElementCount; i++)
        if (answerDiv.children[i].childElementCount === 1) ++n;
    verifyButton.toggleAttribute("disabled", n !== color.length);
}

// Verificar si el nombre del color es correcto
verifyButton.addEventListener("click", function () {
    let word = "";
    const spaces = document.querySelectorAll(".answer-space");
    spaces.forEach(function (value) {
        word += value.firstChild.innerHTML;
    });

    if (word.toUpperCase() === color.toUpperCase()) {
        answerDiv.style.backgroundColor = "lawngreen";
        alert("¡Correcto! :D");
        num++;
        progressBar.setAttribute("aria-valuenow", num);
        verifyButton.toggleAttribute("disabled", true);
        if (num >= colors.length) {
            alert("¡Práctica terminada! :D");
            document.querySelectorAll('.letter').forEach(function (value) {
                value.setAttribute("draggable", "false");
                value.style.cursor = "default";
            });
        }
        startGame();
    } else {
        answerDiv.style.backgroundColor = "red";
        alert("La respuesta no es correcta :(" +
            "\nHas escrito: \"" + word.toUpperCase() + "\" y debía ser \"" + color.toUpperCase() + "\"");
    }
});

startGame();