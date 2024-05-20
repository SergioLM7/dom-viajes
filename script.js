
//Checbox
const menuDestinos = document.createElement('select');
const section3 = document.querySelector('#section3');
menuDestinos.name = 'select';
menuDestinos.id = 'destinos';
section3.append(menuDestinos);

let valoresOption = [
    {valor: 'barcelona',
    text: 'Barcelona',},
    {valor: 'burgos',
    text: 'Burgos'},
    {valor: 'madrid',
    text: 'Madrid'},
    {valor: 'coruña',
    text: 'A Coruña',},
    {valor: 'valencia',
    text: 'Valencia'},];

const createOption = (numero, objeto) => {
    let option = [];
    for (i=0; i<numero; i++) {
        option = document.createElement('option');
        option.value = valoresOption[i].valor;
        option.text = valoresOption[i].text;
        menuDestinos.appendChild(option);
    }
};

createOption(5, valoresOption);

//Imágenes
const creadorImagenes = (sec, id) => {
    const seccion = document.querySelector(sec);
    console.log(sec);
    const imagen = document.createElement("img");
    imagen.id = id;
    seccion.appendChild(imagen);
};

creadorImagenes('#section1', 'imagen-portada');

let valoresImagenes = [
    {src: './banner/1.jpg',
    alt: 'lago al atardecer',},
    {src: './banner/2.jpg',
    alt: 'globos aerostáticos',},
    {src: './banner/3.jpg',
    alt: 'cielo al atardecer',},
    {src: './banner/4.jpg',
    alt: 'campo de globos',},
    {src: './banner/5.jpg',
    alt: 'cielo con luna',},
    {src: './banner/6.jpg',
    alt: 'montañas nevadas',},
    {src: './banner/7.jpg',
    alt: 'atardecer en el mar con pájaros',},
    {src: './banner/8.jpg',
    alt: 'flores en una rama de árbol',},
]; 

/*const galeria = (imagenes) => {
    let imagen = document.querySelector('img');
    imagenes.forEach(element => {
        imagen.src = valoresImagenes.src;
        imagen.alt = valoresImagenes.alt;
    });
  return imagen;
};

galeria (valoresImagenes);

function inicio() {
    setInterval(cambia, 3000);
    };
window.onload=inicio;*/


//Sección caja imagen-texto
let imagen_2 = [
    {src: './viajes/viajes-1.jpg',
    alt: 'playa paradisíaca',
    texto: 'pppppppppppppppppp',},
    {src: './viajes/viajes-2.jpg',
    alt: 'cabañas en el agua',
texto: 'pppppppppppppppppp',},
    {src: './viajes/viajes-3.jpg',
    alt: 'flechas de direcciones',
    texto: 'pppppppppppppppppp',},
    {src: './viajes/viajes-4.jpg',
    alt: 'plaza de España de Sevilla',
    texto: 'pppppppppppppppppp',},
]; 

const section2 = document.querySelector('#section2');
const crearImagenTexto = (numero) => {
    let caja = [];
    for (let i = 0; i<numero; i++) {
        caja = document.createElement('article');
        caja.id= 'article' + i;
        section2.appendChild(caja);
    }
};
crearImagenTexto(4);

let article = document.querySelector('#article0')
let imagen_viajes1 = creadorImagenes('#article0', imagen_2[0]);


