function saltar(gatito, eventImages) {
  eventImages.forEach(image => {
    image.addEventListener("mouseenter", () => {
      if (gatito != null) gatito.classList.add("salta");
    });

    image.addEventListener("mouseleave", () => {
      if (gatito != null) gatito.classList.remove("salta");
    });
  });
}

const gatito = document.getElementById("gatito");
const eventImages = document.querySelectorAll(".botones");

saltar(gatito, eventImages);


const gatete = document.getElementById("gatete");
const boton = document.querySelectorAll(".btn");

saltar(gatete, boton);

function mostrarBurbuja(botonPulsado, bubbleMostrar, bubbleBienvenida) {
  botonPulsado.forEach(boton => {
    boton.addEventListener('mouseover', () => {
      bubbleMostrar.style.display = 'block';
      bubbleBienvenida.style.display = 'none';
    });

    boton.addEventListener('mouseout', () => {
      bubbleMostrar.style.display = 'none';
      bubbleBienvenida.style.display = 'block';
    });
  });
}

const bubbleBienvenida = document.getElementById("bubbleBienvenida")
const botonAnimales = document.querySelectorAll(".buttonAnimales");
const bubbleAnimales = document.getElementById("bubbleAnimales");

mostrarBurbuja(botonAnimales, bubbleAnimales, bubbleBienvenida);


const botonNumeros = document.querySelectorAll(".buttonNumeros");
const bubbleNumeros = document.getElementById("bubbleNumeros");

mostrarBurbuja(botonNumeros, bubbleNumeros, bubbleBienvenida);


const botonColores = document.querySelectorAll(".buttonColores");
const bubbleColores = document.getElementById("bubbleColores");

mostrarBurbuja(botonColores, bubbleColores, bubbleBienvenida);

const gatitoMenu = document.getElementById("gatitoMenu");
const botonMenu = document.querySelectorAll(".card");


botonMenu.forEach(image => {
  image.addEventListener("mouseenter", () => {
    gatitoMenu.classList.add("salta2");
  });

  image.addEventListener("mouseleave", () => {
    gatitoMenu.classList.remove("salta2");
  });
});

const bubbleMenu = document.getElementById("bubbleMenu");
const botonPractica = document.querySelectorAll(".botonPractica");
const bubbleModoPractica = document.getElementById("bubblePractica");

botonPractica.forEach(boton => {
  boton.addEventListener('mouseover', () => {
    bubbleModoPractica.style.display = 'block';
    bubbleMenu.style.display = 'none';
  });

  boton.addEventListener('mouseout', () => {
    bubbleModoPractica.style.display = 'none';
    bubbleMenu.style.display = 'block';
  });
});

const botonEstudio = document.querySelectorAll(".botonEstudio");
const bubbleModoEstudio = document.getElementById("bubbleEstudio");

botonEstudio.forEach(boton => {
  boton.addEventListener('mouseover', () => {
    bubbleModoEstudio.style.display = 'block';
    bubbleMenu.style.display = 'none';
  });

  boton.addEventListener('mouseout', () => {
    bubbleModoEstudio.style.display = 'none';
    bubbleMenu.style.display = 'block';
  });
});

const botonTienda = document.querySelectorAll(".botonTienda");
const bubbleTienda = document.getElementById("bubbleTienda");

botonTienda.forEach(boton => {
  boton.addEventListener('mouseover', () => {
    bubbleTienda.style.display = 'block';
    bubbleMenu.style.display = 'none';
  });

  boton.addEventListener('mouseout', () => {
    bubbleTienda.style.display = 'none';
    bubbleMenu.style.display = 'block';
  });
});

const bubbleWelc = document.getElementById("bubbleWelcomeStudy");
const botonCol = document.querySelectorAll(".botonCol");
const bubbleColoresStudy = document.getElementById("bubbleColoresStudy");

botonCol.forEach(boton => {
  boton.addEventListener('mouseover', () => {
    bubbleColoresStudy.style.display = 'block';
    bubbleWelc.style.display = 'none';
  });

  boton.addEventListener('mouseout', () => {
    bubbleColoresStudy.style.display = 'none';
    bubbleWelc.style.display = 'block';
  });
});

const botonAni = document.querySelectorAll(".botonAni");
const bubbleAnimalesStudy = document.getElementById("bubbleAnimalesStudy");

botonAni.forEach(boton => {
  boton.addEventListener('mouseover', () => {
    bubbleAnimalesStudy.style.display = 'block';
    bubbleWelc.style.display = 'none';
  });

  boton.addEventListener('mouseout', () => {
    bubbleAnimalesStudy.style.display = 'none';
    bubbleWelc.style.display = 'block';
  });
});

const botonNume = document.querySelectorAll(".botonNum");
const bubbleNumerosStudy = document.getElementById("bubbleNumerosStudy");

botonNume.forEach(boton => {
  boton.addEventListener('mouseover', () => {
    bubbleNumerosStudy.style.display = 'block';
    bubbleWelc.style.display = 'none';
  });

  boton.addEventListener('mouseout', () => {
    bubbleNumerosStudy.style.display = 'none';
    bubbleWelc.style.display = 'block';
  });
});



