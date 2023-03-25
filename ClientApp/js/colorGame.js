const verifyButton = document.getElementById("verify");
const lettersDiv = document.getElementById("letters");
const answerDiv = document.getElementById("answer");
const colorDisplay = document.getElementById("color-display");

//TO-DO: Agregar varios colores, y aleatorización de los mismos

// inicializar variables
const color = "blue";
const letters = ["b", "u", "i", "x", "e", "l"];
colorDisplay.style.backgroundColor = "#2408f3";

// agregar letras al contenedor de letras
for (let i = 0; i < letters.length; i++) {
    const letter = document.createElement("div");
    letter.setAttribute("class", "letter");
    letter.innerHTML = letters[i].toUpperCase();
    lettersDiv.append(letter);
}

lettersDiv.style.width = 50 * letters.length + 20 + "px";
answerDiv.style.width = 50 * color.length + 20 + "px";

// hacer que todas las letras sean arrastrables
const allLetters = document.querySelectorAll('.letter');
for (let i = 0; i < allLetters.length; i++) {
    allLetters[i].addEventListener("dragstart", function(e){
        e.dataTransfer.setData('text', this.id);
    });
}

document.addEventListener('dragover', function(e) {
	e.preventDefault();
});

document.addEventListener('drop', function(e) {
	e.preventDefault();
	var data = e.dataTransfer.getData('text');
	var droppedElement = document.getElementById(data);

	// Si la letra arrastrada es la primera letra del nombre del color, la soltamos en el contenedor
	if (droppedElement.innerHTML.toUpperCase() == colorNameElement.innerHTML.charAt(0).toUpperCase()) {
		document.getElementById("letter-container").removeChild(droppedElement);
		colorNameElement.innerHTML = colorNameElement.innerHTML.substr(1);

		// Si se ha completado el nombre del color, cambiar el fondo del contenedor al color correcto
		if (colorNameElement.innerHTML.length == 0) {
			document.getElementById("game-container").style.backgroundColor = "#00ff15";
		}
	}
});

// verificar si el nombre del color es correcto
verifyButton.addEventListener("click", function(){
    const word = "";
    document.querySelectorAll("#answer .letra").each(function() {
        word += $(this).text();
    });
    if (word == color) {
        alert("¡Correcto! :D");
        //TO-DO: poner otro color
    } else alert("La respuesta no es correcta :(")
});