const doggy = document.getElementById('doggy');
const sharky = document.getElementById('sharky');
const leoncito = document.getElementById('leoncito');
const beeee = document.getElementById('beeee');
const elefantillo = document.getElementById('elefantillo');
const audio= document.getElementById('audio');
audio.volume = 1;

const botonpamostrar = document.getElementsByClassName("paramostraranimals")[0];

function mostrarContenido() {
    document.getElementById("contenidoanimals").style.display = "block";
    botonpamostrar.style.display="none";
}

doggy.addEventListener("mouseover" , function() {
    console.log("Mouse entered the doggy element");
    audio.play();
});

doggy.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});

sharky.addEventListener("mouseover" , function() {
    console.log("Mouse entered the doggy element");
    audio.play();
});

sharky.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});

leoncito.addEventListener("mouseover" , function() {
    console.log("Mouse entered the doggy element");
    audio.play();
});

leoncito.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});

beeee.addEventListener("mouseover" , function() {
    console.log("Mouse entered the doggy element");
    audio.play();
});

beeee.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});

elefantillo.addEventListener("mouseover" , function() {
    console.log("Mouse entered the doggy element");
    audio.play();
});

elefantillo.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});

function mostrarBoton() {
    botonpamostrar.style.display = "block";
}

// Ejecutamos la función al cargar la página
mostrarBoton();