const nombreH1 = document.getElementById("nombre");
const nombre = localStorage.getItem("nombre");

nombreH1.innerHTML = "¡Hola " + nombre + "!";
