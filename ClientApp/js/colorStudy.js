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

const botonpamostrar = document.getElementsByClassName("paramostrarcolors")[0];
const botonaudios = document.getElementById("audios");
const verde = document.getElementsByClassName("green")[0];
const rojo = document.getElementsByClassName("red")[0];
const azul = document.getElementsByClassName("blue")[0];
const amarillo = document.getElementsByClassName("yellow")[0];
const blanco = document.getElementsByClassName("white")[0];
const morado = document.getElementsByClassName("purple")[0];
const aqua = document.getElementsByClassName("aqua")[0];
const negro = document.getElementsByClassName("black")[0];
const naranja = document.getElementsByClassName("orange")[0];
const gris = document.getElementsByClassName("gray")[0];
const audiogreen = document.getElementById('audiogreen');
const audiored = document.getElementById('audiored');
const audioblue = document.getElementById('audioblue');
const audioyellow = document.getElementById('audioyellow');
const audiowhite = document.getElementById('audiowhite');
const audiopurple = document.getElementById('audiopurple');
const audioaqua = document.getElementById('audioaqua');
const audioblack = document.getElementById('audioblack');
const audioorange = document.getElementById('audioorange');
const audiogray = document.getElementById('audiogray');

function mostrarContenidoColor() {
    document.getElementById("contenidocolors").style.display = "block";
    botonpamostrar.style.display="none";
}

function mostrarBoton() {
    botonpamostrar.style.display = "block";
}


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
        
        let audioFileName = "resources/sounds/" + colorName[0].toLowerCase() + " " + colorName[1].toLowerCase() + ".aac";
            
        let audio = new Audio(audioFileName);
        color.audio = audio;
    
        color.addEventListener("mouseover", function () {
            console.log(color.audio)
            color.audio.play();
        });
    
        color.addEventListener("mouseout", function(){
            color.audio.pause();
            color.audio.currentTime = 0;
        });
    }
}

botonaudios.onclick = function(){
    let colors = colors1;
    for (let i = 0; i < colorDivs.length; i++) {
        const color = colorDivs.item(i);
        if (!color) {
            console.log("ERROR");
            continue;
        }
        if (i == 0 && color.getAttribute("class") == "purple")
            colors = colors2;

        const colorName = colors[i];
    
        let audioFileName = "resources/sounds/" + colorName[0].toLowerCase() + " " + colorName[1].toLowerCase() + ".aac";
            
        let audio = new Audio(audioFileName);
        color.audio = audio;
    
        color.addEventListener("mouseover", function () {
            console.log(color.audio)
            color.audio.play();
        });
    
        color.addEventListener("mouseout", function(){
            color.audio.pause();
            color.audio.currentTime = 0;
        });
    }
};


// Ejecutamos la función al cargar la página
mostrarBoton();