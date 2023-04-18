const nombreInput = document.getElementById("nombre");
const boton = document.getElementById("botoncico");

submit = () => {
    let nombreString = null;
    if (nombreInput == null) return;
    nombreString = nombreInput.value;
    localStorage.setItem("nombre", nombreString);
    window.location.href = "./mainmenu.html";
}

boton.addEventListener("click", submit);