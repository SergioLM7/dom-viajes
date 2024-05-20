//Variables
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const menuDestinos = document.createElement('select');

let valoresImagenes = [
    {src: './banner/1.jpg',
    alt: 'lago al atardecer',
    title: 'Imagen 1',},
    {src: './banner/2.jpg',
    alt: 'globos aerostáticos',
    title: 'Imagen 2',},
    {src: './banner/3.jpg',
    alt: 'cielo al atardecer',
    title: 'Imagen 3',},
    {src: './banner/4.jpg',
    alt: 'campo de globos',
    title: 'Imagen 4',},
    {src: './banner/5.jpg',
    alt: 'cielo con luna',
    title: 'Imagen 5',},
    {src: './banner/6.jpg',
    alt: 'montañas nevadas',
    title: 'Imagen 6',},
    {src: './banner/7.jpg',
    alt: 'atardecer en el mar con pájaros',
    title: 'Imagen 7',},
    {src: './banner/8.jpg',
    alt: 'flores en una rama de árbol',
    title: 'Imagen 8',},
]; 

let valoresOption = [
    {valor: 'barcelona',
    texto: 'Barcelona',},
    {valor: 'burgos',
    texto: 'Burgos'},
    {valor: 'madrid',
    texto: 'Madrid'},
    {valor: 'coruña',
    texto: 'A Coruña',},
    {valor: 'valencia',
    texto: 'Valencia'},];

let imagenTexto = [
    {src: './viajes/viajes-1.jpg',
    alt: 'playa paradisíaca',
    title: 'Viajes 1',
    h3: 'Viajes 1',
    texto: 'Este es un ejemplo de caja-texto para el ejercicio DOM viajes del bootcamp de FST de The Bridge.',},
    {src: './viajes/viajes-2.jpg',
    alt: 'cabañas en el agua',
    title: 'Viajes 2',
    h3: 'Viajes 2',
    texto: 'Este es un ejemplo de caja-texto para el ejercicio DOM viajes del bootcamp de FST de The Bridge.',},
    {src: './viajes/viajes-3.jpg',
    alt: 'flechas de direcciones',
    title: 'Viajes 3',
    h3: 'Viajes 3',
    texto: 'Este es un ejemplo de caja-texto para el ejercicio DOM viajes del bootcamp de FST de The Bridge.',},
    {src: './viajes/viajes-4.jpg',
    alt: 'plaza de España de Sevilla',
    title: 'Viajes 4',
    h3: 'Viajes 4',
    texto: 'Este es un ejemplo de caja-texto para el ejercicio DOM viajes del bootcamp de FST de The Bridge.',},
]; 

//Funciones para mostrar las imágenes aleatorias de apertura
const creadorImagenes = (element, id) => {
    const seccion = document.querySelector(element);
    const imagen = document.createElement("img");
    imagen.id = id;
    seccion.append(imagen);
};

const getRandomImagenes = () => {
    return Math.floor(Math.random()* valoresImagenes.length);
};

const imagenAleatoria = () => {
    let imagen = document.querySelector('img');
    let imagenFinal = valoresImagenes[getRandomImagenes()];
        imagen.src = imagenFinal.src;
        imagen.alt = imagenFinal.alt;
        imagen.title = imagenFinal.title;
};


//Funciones para la sección de caja imagen-h3-texto
const crearImagenTexto = (numero) => {
    let caja = [];
    for (let i = 0; i<numero; i++) {
        caja = document.createElement('article');
        caja.id= 'article' + i;
        section2.append(caja);
    }
};

const crearCajaTexto = () => {
    let cajas = [];
    let textos = [];
    let losH3 = [];
    let article = [];
    for (let element in imagenTexto) {
        article = document.querySelector('#article'+element);
        cajas = document.createElement('img');
        textos = document.createElement('p');
        cajas.src = imagenTexto[element].src;
        cajas.alt = imagenTexto[element].alt;
        cajas.title = imagenTexto[element].title;
        textos.innerHTML = imagenTexto[element].texto;
        losH3.innerHTML = imagenTexto[element].h3;
        article.append(cajas,textos,losH3);
    }
};


//Funciones para crear del checkbox final
const creaCheckox = () => { 
menuDestinos.name = 'select';
menuDestinos.id = 'destinos';
section3.append(menuDestinos);
};

const createOption = () => {
    let option = [];
    for (let element in valoresOption) {
        option = document.createElement('option');
        option.value = valoresOption[element].valor;
        option.text = valoresOption[element].texto;
        menuDestinos.append(option);
    }
};

//Llamadas a las funciones
//Para cargar la imagen aleatoria de apertura
creadorImagenes('figure', 'imagen-portada');
imagenAleatoria ();

//Para genera las cajas imagen-texto después del segundo H2
crearImagenTexto(4);
crearCajaTexto();


//Para crear el checkbox
creaCheckox();
createOption();