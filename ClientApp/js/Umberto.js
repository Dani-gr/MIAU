const Umberto = document.getElementById("Umberto").firstElementChild;
let accesorio = localStorage.getItem("accesorio");

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