const doggy = document.getElementById('dog');
const sharky = document.getElementById('shark');
const leoncito = document.getElementById('lion');
const beeee = document.getElementById('sheep');
const elefantillo = document.getElementById('elephant');
const audioperro = document.getElementById('audioperro');
const audiosharky = document.getElementById('audiosharky');
const audiolion = document.getElementById('audiolion');
const audiooveja = document.getElementById('audiooveja');
const audioelefante = document.getElementById('audioelefante');
audioperro.volume = 1;
audiosharky.volume = 1;
audiolion.volume = 1;
audiooveja.volume = 1;
audioelefante.volume = 1;

const botonpamostraranimals = document.getElementsByClassName("paramostraranimals")[0];

function mostrarContenidoAnimals() {
    document.getElementById("contenidoanimals").style.display = "block";
    document.querySelectorAll('.SoundOnHover').forEach(function (audio) {
        audio.removeAttribute("muted");
    });
    botonpamostraranimals.style.display = "none";
}

doggy.addEventListener("keyup", function () {
    audioperro.play();
});

doggy.addEventListener("mouseover", function () {
    audioperro.play();
});

doggy.addEventListener("mouseout", function () {
    audioperro.pause();
    audioperro.currentTime = 0;
});

sharky.addEventListener("keyup", function () {
    audiosharky.play();
});

sharky.addEventListener("mouseover", function () {
    audiosharky.play();
});

sharky.addEventListener("mouseout", function () {
    audiosharky.pause();
    audiosharky.currentTime = 0;
});

leoncito.addEventListener("keyup", function () {
    audiolion.play();
});

leoncito.addEventListener("mouseover", function () {
    audiolion.play();
});

leoncito.addEventListener("mouseout", function () {
    audiolion.pause();
    audiolion.currentTime = 0;
});

beeee.addEventListener("keyup", function () {
    audiooveja.play();
});

beeee.addEventListener("mouseover", function () {
    audiooveja.play();
});

beeee.addEventListener("mouseout", function () {
    audiooveja.pause();
    audiooveja.currentTime = 0;
});

elefantillo.addEventListener("keyup", function () {
    audioelefante.play();
});

elefantillo.addEventListener("mouseover", function () {
    audioelefante.play();
});

elefantillo.addEventListener("mouseout", function () {
    audioelefante.pause();
    audioelefante.currentTime = 0;
});

function mostrarBoton() {
    botonpamostraranimals.style.display = "block";
}

// Ejecutamos la función al cargar la página
mostrarBoton();