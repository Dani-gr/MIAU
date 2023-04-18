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


