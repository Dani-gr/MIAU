var verificarButton = $("#verify");
$(document).ready(function() {
    // inicializar variables
    var color = "blue";
    var letters = ["b", "l", "u", "e"];

    // agregar letras al contenedor de letras
    for (var i = 0; i < letters.length; i++) {
        var letter = $("<div class='letter'>" + letters[i] + "</div>");
        $("#letters").append(letter);
    }

    // hacer que las letras sean arrastrables
    $(".letter").draggable({
        cursor: "move",
        revert: true
    });

    // verificar si el nombre del color es correcto
    // To-do: cambiar a pulsar un botón
    
    verificarButton.click() = function(){
        var word = "";
        $("#game-container .letra").each(function() {
            word += $(this).text();
        });
        if (word == color) {
            alert("¡Correcto!");
        }
    }
});