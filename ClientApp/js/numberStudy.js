const uno = document.getElementById('n1');
const dos = document.getElementById('n2');
const tres = document.getElementById('n3');
const cuatro = document.getElementById('n4');
const cinco = document.getElementById('n5');
const seis = document.getElementById('n6')
const diez = document.getElementById("n10");
const audiouno = document.getElementById('audiouno');
const audiodos = document.getElementById('audiodos');
const audiotres = document.getElementById('audiotres');
const audiocuatro = document.getElementById('audiocuatro');
const audiocinco = document.getElementById('audiocinco');
const audioseis = document.getElementById('audioseis');
const audiodiez = document.getElementById('audiodiez');

const botonpamostrarnumber = document.getElementsByClassName("paramostrarnumber")[0];

function mostrarContenidoNumber() {
    document.getElementById("contenidonumber").style.display = "block";
    botonpamostrarnumber.style.display="none";
}

uno.addEventListener("mouseover" , function() {
    audiouno.play();
});

uno.addEventListener("mouseout", function() {
    audiouno.pause();
    audiouno.currentTime = 0;
});

dos.addEventListener("mouseover" , function() {
    audiodos.play();
});

dos.addEventListener("mouseout", function() {
    audiodos.pause();
    audiodos.currentTime = 0;
});

tres.addEventListener("mouseover" , function() {
    audiotres.play();
});

tres.addEventListener("mouseout", function() {
    audiotres.pause();
    audiotres.currentTime = 0;
});

cuatro.addEventListener("mouseover" , function() {
    audiocuatro.play();
});

cuatro.addEventListener("mouseout", function() {
    audiocuatro.pause();
    audiocuatro.currentTime = 0;
});

cinco.addEventListener("mouseover" , function() {
    audiocinco.play();
});

cinco.addEventListener("mouseout", function() {
    audiocinco.pause();
    audiocinco.currentTime = 0;
});

seis.addEventListener("mouseover" , function() {
    audioseis.play();
});

seis.addEventListener("mouseout", function() {
    audioseis.pause();
    audioseis.currentTime = 0;
});

diez.addEventListener("mouseover" , function() {
    audiodiez.play();
});

diez.addEventListener("mouseout", function() {
    audiodiez.pause();
    audiodiez.currentTime = 0;
});

function mostrarBoton() {
    botonpamostrarnumber.style.display = "block";
}

// Ejecutamos la función al cargar la página
mostrarBoton();