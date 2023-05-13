const cards = [
    document.getElementById('n1'),
    document.getElementById('n2'),
    document.getElementById('n3'),
    document.getElementById('n4'),
    document.getElementById('n5'),
    document.getElementById('n6'),
    document.getElementById("n10")
]

const fileNames = [
    "uno one",
    "dos two",
    "tres three",
    "cuatro four",
    "cinco five",
    "seis six",
    "diez ten"
]

const botonpamostrarnumber = document.getElementsByClassName("paramostrarnumber")[0];

function mostrarContenidoNumber() {
    document.getElementById("contenidonumber").style.display = "block";
    botonpamostrarnumber.style.display = "none";
}

function mostrarBoton() {
    botonpamostrarnumber.style.display = "block";
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