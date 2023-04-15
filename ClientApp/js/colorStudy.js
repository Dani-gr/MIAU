const colorDivs = document.getElementById("PaletaDiv").children;
//const colorDisplays = colorDivs[(color) => { color.firstElementChild }]
const button = document.getElementById("changeColorsButton");
const colors1 = [
    ["Verde", "Green"],
    ["Rojo", "Red"],
    ["Azul", "Blue"],
    ["Amarillo", "Yellow"],
    ["Blanco", "White"]
]
const colors2 = [
    ["Morado", "Purple"],
    ["Aqua", "Aqua"],
    ["Negro", "Black"],
    ["Naranja", "Orange"],
    ["Gris", "Gray"]
]

button.onclick = function () {
    //console.log(colorDisplays);
    let colors = colors2;
    for (let i = 0; i < colorDivs.length; i++) {
        const color = colorDivs.item(i);
        if (!color) {
            console.log("ERROR");
            continue;
        }
        if (i == 0 && color.getAttribute("class") !== "green")
            colors = colors1;

        const colorName = colors[i];
        color.setAttribute("class", colorName[1].toLowerCase());
        const colorDisplay = color.firstElementChild;

        if (!colorDisplay) {
            console.log("ERROR");
            continue;
        }

        colorDisplay.innerHTML = colorName[0] + "<br/>" + colorName[1] + "<br/>";
    }
}