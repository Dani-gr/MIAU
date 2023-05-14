const nombreH1 = document.getElementById("nombre");
const nombre = localStorage.getItem("nombre");

if (nombre !== null && nombre.trim() !== "")
    nombreH1.innerText = "¡Hola " + nombre.trim() + "!";
else nombreH1.innerText = "¡Hola!";
