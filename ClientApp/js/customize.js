const Umberto = document.getElementById("Umberto").firstElementChild;
let accesorio = "-";

updateUmberto = () => {
    switch (accesorio) {
        case "a1":
            // TODO
            Umberto.src = "./resources/Umberto/solo-gatito.png";
            Umberto.alt = "Umberto con ";
            break;
        case "a2":
            // TODO
            Umberto.src = "./resources/Umberto/solo-gatito.png";
            Umberto.alt = "Umberto con ";
            break;
        case "a3":
            // TODO
            Umberto.src = "./resources/Umberto/solo-gatito.png";
            Umberto.alt = "Umberto con ";
            break;
        case "a4":
            // TODO
            Umberto.src = "./resources/Umberto/solo-gatito.png";
            Umberto.alt = "Umberto con ";
            break;
        case "a5":
            // TODO
            Umberto.src = "./resources/Umberto/solo-gatito.png";
            Umberto.alt = "Umberto con ";
            break;
        case "a6":
            // TODO
            Umberto.src = "./resources/Umberto/solo-gatito.png";
            Umberto.alt = "Umberto con ";
            break;
        default:
            Umberto.src = "./resources/Umberto/solo-gatito.png";
            Umberto.alt = "Umberto";
            break;
    }
}

update = (elemento) => {
    // Deseleccionar todos
    document.querySelectorAll(".card").forEach(element => {
        setSeleccionado(element, false);
    });

    // Quitar el seleccionado
    if (elemento == null || elemento.id == null || accesorio === elemento.id) {
        accesorio = "-";
        localStorage.setItem("accesorio", "-");
        updateUmberto();
        return;
    }

    // Establecer el seleccionado
    try {
        setSeleccionado(elemento, true);
        accesorio = elemento.id;
    } catch { }

    localStorage.setItem("accesorio", accesorio);
    updateUmberto();
}

setSeleccionado = (elemento, seleccionar) => {
    if (seleccionar == null || (seleccionar !== true && seleccionar !== false) || elemento == null) return;
    const texto = document.querySelectorAll("#" + elemento.id + " .card-body p").item(0);
    if (seleccionar) {
        elemento.classList.add("selected");
        texto.innerText = "¡Equipado!";
    } else {
        elemento.classList.remove("selected");
        texto.innerText = "Equipar";
    }

}

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function () { update(this) });
});

update(document.getElementById(localStorage.getItem("accesorio")));