const gatito = document.getElementById("gatito");
const eventImages = document.querySelectorAll(".botones");

eventImages.forEach(image => {
  image.addEventListener("mouseenter", () => {
    gatito.classList.add("salta");
  });

  image.addEventListener("mouseleave", () => {
    gatito.classList.remove("salta");
  });
});

const gatete = document.getElementById("gatete");
const boton = document.querySelectorAll(".btn");

boton.forEach(image => {
  image.addEventListener("mouseenter", () => {
    gatete.classList.add("salta");
  });

  image.addEventListener("mouseleave", () => {
    gatete.classList.remove("salta");
  });
});

const botonAnimales = document.querySelectorAll(".button2");
const bubbleAnimales = document.getElementById("bubbleAnimales");

botonAnimales.forEach(boton => {
  boton.addEventListener('mouseover', () => {
    bubbleAnimales.style.display = 'block';
    bubbleBienvenida.style.display = 'none';
  });

  boton.addEventListener('mouseout', () => {
    bubbleAnimales.style.display = 'none';
    bubbleBienvenida.style.display = 'block';
  });
});

const bubbleBienvenida = document.getElementById("bubbleBienvenida")
const botonNumeros = document.querySelectorAll(".button3");
const bubbleNumeros = document.getElementById("bubbleNumeros");

botonNumeros.forEach(boton => {
  boton.addEventListener('mouseover', () => {
    bubbleNumeros.style.display = 'block';
    bubbleBienvenida.style.display = 'none';
  });

  boton.addEventListener('mouseout', () => {
    bubbleNumeros.style.display = 'none';
    bubbleBienvenida.style.display = 'block';
  });
});


const botonColores = document.querySelectorAll(".button1");
const bubbleColores = document.getElementById("bubbleColores");

botonColores.forEach(boton => {
  boton.addEventListener('mouseover', () => {
    bubbleColores.style.display = 'block';
    bubbleBienvenida.style.display = 'none';
  });

  boton.addEventListener('mouseout', () => {
    bubbleColores.style.display = 'none';
    bubbleBienvenida.style.display = 'block';
  });
});

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



