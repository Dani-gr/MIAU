const verifyButton = document.getElementById("verify");
const lettersDiv = document.getElementById("letters");
const answerDiv = document.getElementById("answer");
const progressBar = document.getElementById("progress-bar");

const numbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "ten"
]
let number;
let letters;
let num = 0;
numbers.sort(function () { return Math.random() - 0.5; });
progressBar.setAttribute("aria-valuemax", numbers.length);

startGame = function () {
    progressBar.setAttribute("aria-valuenow", num);
    progressBar.style.width = (num / numbers.length * 100).toFixed(2) + "%";

    // Seleccionar el número y las letras
    if (num >= numbers.length) return;
    number = numbers[num];

    letters = number.split("");
    letters.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    letters.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));

    letters.sort(function () { return Math.random() - 0.5; });

    searchResource = function (string) {
        let png;
        switch (string) {
            case "one":
                png = "./resources/numbers/1.png";
                break;
            case "two":
                png = "./resources/numbers/2.png";
                break;
            case "three":
                png = "./resources/numbers/3.png";
                break;
            case "four":
                png = "./resources/numbers/4.png";
                break;
            case "five":
                png = "./resources/numbers/5.png";
                break;
            case "six":
                png = "./resources/numbers/6.png";
                break;
            case "ten":
                png = "./resources/numbers/10.png";
                break;
        }
        return png;
    }

    translate = function (string) {
        let name;
        switch (string) {
            case "one":
                name = "uno";
                break;
            case "two":
                name = "dos";
                break;
            case "three":
                name = "tres";
                break;
            case "four":
                name = "cuatro";
                break;
            case "five":
                name = "cinco";
                break;
            case "six":
                name = "seis";
                break;
            case "ten":
                name = "diez";
                break;
        }
        return name;
    }

    const numberDisplay = document.getElementById("number-display");
    numberDisplay.src = searchResource(number);
    numberDisplay.alt = translate(number);
    numberDisplay.setAttribute("aria-label", "Pista: " + translate(number));

    answerDiv.style.backgroundColor = "#fff";

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

        const sr_button = document.createElement("button");
        sr_button.setAttribute("class", "sr-only");
        sr_button.setAttribute("tabIndex", "-1");
        sr_button.setAttribute("aria-hidden", "true");
        letter.setAttribute("tabIndex", i.toString());

        letter.append(sr_button);
        lettersDiv.append(letter);
    }

    // Establecer los tamaños según el número de letras
    lettersDiv.style.width = 50 * letters.length + 20 + "px";
    answerDiv.style.width = 50 * number.length + 20 + "px";

    // Eliminar los espacios anteriores
    for (let i = answerDiv.childElementCount - 1; i >= 0; i--)
        answerDiv.children[i].remove();

    // Crear los espacios para la respuesta
    for (let i = 0; i < number.length; i++) {
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

    // Añadir el index de la navegación por tabulador
    verifyButton.setAttribute("tabIndex", letters.length);

    // Añadir descripción de la caja de respuesta
    answerDiv.setAttribute("aria-label", "Respuesta de " + number.length + " letras, vacía");
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
    if (num >= numbers.length) return;
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
    } else move(lettersDiv, clickedLetter); // Quitar la letra y devolverla 
}

move = function (space, droppedLetter) {
    if (num >= numbers.length) return;
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
        if (answerDiv.children[i].childElementCount === 1) {
            // Actualizamos la navegación por tab de las letras colocadas
            answerDiv.children[i].firstChild.setAttribute("tabIndex", n.toString());
            ++n;
        }
    verifyButton.toggleAttribute("disabled", n !== number.length);
    verifyButton.toggleAttribute("aria-disabled", n !== number.length);

    lettersDiv.setAttribute("tabIndex", (n).toString());
    for (let i = 0; i < lettersDiv.childElementCount; i++) {
        // Actualizamos la navegación por tab de las letras sin colocar
        lettersDiv.children[i].setAttribute("tabIndex", (i + n).toString());
    }

    // Actualizar descripción de la caja de respuesta
    let aria_label = "Respuesta de " + number.length + " letras, ";
    aria_label = aria_label.concat(
        number.length === 0 ?
            "vacía" : (
                (number.length - n) === 0 ?
                    "completa" : (
                        "falta" + ((number.length - n) === 1 ?
                            " una" :
                            "n " + (number.length - n)
                        )
                    )
            ) + ". "
    );
    for (let i = 0; i < answerDiv.childElementCount; i++)
        aria_label = aria_label.concat(
            answerDiv.children[i].childElementCount === 1 ?
                answerDiv.children[i].firstChild.innerText :
                "hueco"
            , "; "
        );

    answerDiv.setAttribute("aria-label", aria_label);
}

// Verificar si el nombre del número es correcto
verifyButton.addEventListener("click", function () {
    let word = "";
    const spaces = document.querySelectorAll(".answer-space");
    spaces.forEach(function (value) {
        word += value.firstChild.innerText;
    });

    if (word.toUpperCase() === number.toUpperCase()) {
        answerDiv.style.backgroundColor = "lawngreen";
        alert("¡Correcto! :D");
        num++;
        progressBar.setAttribute("aria-valuenow", num);
        verifyButton.toggleAttribute("disabled", true);
        verifyButton.toggleAttribute("aria-disabled", true);
        if (num >= numbers.length) {
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
            "\nHas escrito: \"" + word.toUpperCase() + "\" y debía ser \"" + number.toUpperCase() + "\"");
    }
});

startGame();