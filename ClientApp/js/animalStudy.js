const cards = [
    document.getElementById('dog'),
    document.getElementById('shark'),
    document.getElementById('lion'),
    document.getElementById('sheep'),
    document.getElementById('elephant')
]

const fileNames = [
    "perro dog",
    "tiburón shark",
    "león lion",
    "oveja sheep",
    "elefante elephant"
]

const botonpamostraranimals = document.getElementsByClassName("paramostraranimals")[0];

function mostrarContenidoAnimals() {
    document.getElementById("contenidoanimals").style.display = "block";
    botonpamostraranimals.style.display = "none";
}

function mostrarBoton() {
    botonpamostraranimals.style.display = "block";
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const filename = "resources/sounds/" + fileNames[i] + ".aac";
        const audio = new Audio(filename);
        card.audio = audio;

        card.addEventListener("keyup", function () {
            card.audio.play();
        });
        card.addEventListener("keydown", function () {
            card.audio.pause();
            card.audio.currentTime = 0;
        });
        card.addEventListener("mouseover", function () {
            card.audio.play();
        });
        card.addEventListener("mouseout", function () {
            card.audio.pause();
            card.audio.currentTime = 0;
        });
    };
}

// Ejecutamos la función al cargar la página
mostrarBoton();