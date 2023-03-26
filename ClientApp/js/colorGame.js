const verifyButton = document.getElementById("verify");
const lettersDiv = document.getElementById("letters");
const answerDiv = document.getElementById("answer");
const colorDisplay = document.getElementById("color-display");

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

startGame = function() {
    // Seleccionar el color y las letras
    color = colors[Math.floor(Math.random() * colors.length)];
    letters = color.split("");
    letters.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    letters.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));

    letters.sort(function() {return Math.random() - 0.5;});

    colorDisplay.style.backgroundColor = color;
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
    document.querySelectorAll('.letter').forEach(function(value) {
        value.addEventListener('dragstart', function(e){
            e.dataTransfer.setData('text', this.id);
        });
    });
}


document.addEventListener('dragover', function(e) {
	e.preventDefault();
});

document.addEventListener('drop', function(e) {
	e.preventDefault();
	const data = e.dataTransfer.getData('text');
	const droppedLetter = document.getElementById(data);

	// Obtener el elemento donde se soltó la letra
	const space = e.target;
    
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
        if(answerDiv.children[i].childElementCount === 1) ++n;
    verifyButton.toggleAttribute("disabled", n !== color.length);
});

// Verificar si el nombre del color es correcto
verifyButton.addEventListener("click", function(){
    let word = "";
    const spaces = document.querySelectorAll(".answer-space");
    spaces.forEach(function(value) {
        word += value.firstChild.innerHTML;
    });

    if (word.toUpperCase() === color.toUpperCase()) {
        answerDiv.style.backgroundColor = "lawngreen";
        alert("¡Correcto! :D");
        startGame();
        // Quizá añadir un botón intermedio para darle control al usuario
    } else { 
        answerDiv.style.backgroundColor = "red";
        alert("La respuesta no es correcta :(" +
            "\nHas escrito: \"" + word.toUpperCase() + "\" y debía ser \"" + color.toUpperCase() + "\"");
        //startGame(); si no queremos que corrija
    }
});

startGame();