const nombre = localStorage.getItem("nombre").trim();
if (nombre == null) nombre = "preset";
const Umberto = document.getElementById("Umberto").firstElementChild;
const variable = "accesorio_".concat(nombre);
let accesorio = "-";

updateUmberto = () => {
    switch (accesorio) {
        case "a1":
            Umberto.alt = "Umberto con lacito";
            Umberto.src = "./resources/Umberto/UmbertoLazo.png";
            break;
        case "a2":
            Umberto.alt = "Umberto con gafas";
            Umberto.src = "./resources/Umberto/UmbertoGafas.png";
            break;
        case "a3":
            // TODO
            Umberto.alt = "Umberto con ";
            Umberto.src = "./resources/Umberto/solo-gatito.png";
            break;
        case "a4":
            // TODO
            Umberto.alt = "Umberto con ";
            Umberto.src = "./resources/Umberto/solo-gatito.png";
            break;
        case "a5":
            // TODO
            Umberto.alt = "Umberto con ";
            Umberto.src = "./resources/Umberto/solo-gatito.png";
            break;
        case "a6":
            // TODO
            Umberto.alt = "Umberto con ";
            Umberto.src = "./resources/Umberto/solo-gatito.png";
            break;
        default:
            Umberto.alt = "Umberto";
            Umberto.src = "./resources/Umberto/solo-gatito.png";
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
        localStorage.setItem(variable, "-");
        updateUmberto();
        return;
    }

    // Establecer el seleccionado
    try {
        setSeleccionado(elemento, true);
        accesorio = elemento.id;
    } catch { }

    localStorage.setItem(variable, accesorio);
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

update(document.getElementById(localStorage.getItem(variable)));