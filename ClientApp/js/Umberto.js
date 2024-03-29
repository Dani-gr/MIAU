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
            Umberto.alt = "Umberto con sombrero";
            Umberto.src = "./resources/Umberto/UmbertoSombrero.png";
            break;
        case "a4":
            Umberto.alt = "Umberto con collar";
            Umberto.src = "./resources/Umberto/UmbertoCollar.png";
            break;
        case "a5":
            Umberto.alt = "Umberto con hoja";
            Umberto.src = "./resources/Umberto/UmbertoHoja.png";
            break;
        case "a6":
            Umberto.alt = "Umberto con corona";
            Umberto.src = "./resources/Umberto/UmbertoCorona.png";
            break;
        default:
            Umberto.alt = "Umberto";
            Umberto.src = "./resources/Umberto/solo-gatito.png";
            break;
    }
}

updateUmberto();