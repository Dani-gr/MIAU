const uno = document.getElementById('n1');
const dos = document.getElementById('n2');
const tres = document.getElementById('n3');
const cuatro = document.getElementById('n4');
const cinco = document.getElementById('n5');
const diez = document.getElementById("n10");
const audio= document.getElementById('audio');
c

uno.addEventListener("mouseover" , function() {
    console.log("Mouse entered the uno element");
    audio.play();
});

uno.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});

dos.addEventListener("mouseover" , function() {
    console.log("Mouse entered the uno element");
    audio.play();
});

dos.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});

tres.addEventListener("mouseover" , function() {
    console.log("Mouse entered the uno element");
    audio.play();
});

tres.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});

cuatro.addEventListener("mouseover" , function() {
    console.log("Mouse entered the uno element");
    audio.play();
});

cuatro.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});

cinco.addEventListener("mouseover" , function() {
    console.log("Mouse entered the uno element");
    audio.play();
});

cinco.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});

function mostrarBoton() {
    botonpamostrar.style.display = "block";
}

// Ejecutamos la función al cargar la página
mostrarBoton();