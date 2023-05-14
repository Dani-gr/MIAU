const nombreUsuario = localStorage.getItem("nombre");
if (nombreUsuario == null) nombreUsuario = "preset";
const Umberto = document.querySelector(".Umberto");
let accesorio = localStorage.getItem("accesorio_".concat(nombreUsuario));

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

updateUmberto();