//Declaración de Variables y llamadas al DOM
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const menuDestinos = document.createElement('select');
let fragment = document.createDocumentFragment();
let seccionEspecial = document.querySelector('section#especial');
let articleEspecial = document.querySelector('#article-especial');
let divEspecial = document.createElement('div');
let imagenEspecial = document.createElement('img');
let parrafoEspecial = document.createElement('p');
let h3Especial = document.createElement('h3');


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
    texto: 'Este es un ejemplo de caja-texto para el ejercicio DOM viajes del bootcamp de FST de The Bridge.',
    id: 'viaje1'},
    {src: './viajes/viajes-2.jpg',
    alt: 'cabañas en el agua',
    title: 'Viajes 2',
    h3: 'Viajes 2',
    texto: 'Este es un ejemplo de caja-texto para el ejercicio DOM viajes del bootcamp de FST de The Bridge.',
    id: 'viaje2',},
    {src: './viajes/viajes-3.jpg',
    alt: 'flechas de direcciones',
    title: 'Viajes 3',
    h3: 'Viajes 3',
    texto: 'Este es un ejemplo de caja-texto para el ejercicio DOM viajes del bootcamp de FST de The Bridge.',
    id: 'viaje3'},
    {src: './viajes/viajes-4.jpg',
    alt: 'plaza de España de Sevilla',
    title: 'Viajes 4',
    h3: 'Viajes 4',
    texto: 'Este es un ejemplo de caja-texto para el ejercicio DOM viajes del bootcamp de FST de The Bridge.',
    id: 'viaje4'},
]; 

//Evento que muestra en qué boton se hace el click
document.addEventListener('click',({target})=>{
    if(target.matches('button')){
        let id=target.id
        dibujaFotoGrande(id);
    } else {
        limpiarImagenEspecial();
    }

});




//Funciones para mostrar las imágenes aleatorias de apertura
//Función para crear la img.
const creadorImagenes = (element, id) => {
    const seccion = document.querySelector(element);
    const imagen = document.createElement("img");
    imagen.id = id;
    seccion.append(imagen);
};

//Función para obtener valores aleatorios para la img
const getRandomImagenes = (arr) => {
    return Math.floor(Math.random()* arr.length);
};

//Función para asignar src, alt y title a la imagen
const imagenAleatoria = () => {
    let imagen = document.querySelector('img');
    let imagenFinal = valoresImagenes[getRandomImagenes(valoresImagenes)];
        imagen.src = imagenFinal.src;
        imagen.alt = imagenFinal.alt;
        imagen.title = imagenFinal.title;
};


//Funciones para la sección de caja imagen-h3-texto
//Función para crear los articles que contengan las img, h3 y p
const crearImagenTexto = (numero) => {
    let caja = [];
    let fragment = document.createDocumentFragment();
    for (let i = 0; i<numero; i++) {
        caja = document.createElement('article');
        caja.id= 'article' + i;
        fragment.append(caja);
    }
    section2.append(fragment);
};

//Función para crear las img, h3 y p y asignarles
//los valores del array de objetos.
const crearCajaTexto = () => {
    let cajas = [];
    let textos = [];
    let losH3 = [];
    let article = [];
    for (let element in imagenTexto) {
        cajas = document.createElement('img');
        losH3 = document.createElement('h3');
        textos = document.createElement('p');
        cajas.src = imagenTexto[element].src;
        cajas.alt = imagenTexto[element].alt;
        cajas.title = imagenTexto[element].title;
        textos.innerHTML = imagenTexto[element].texto;
        losH3.innerHTML = imagenTexto[element].h3;
        fragment.append(cajas, losH3, textos);
        article = document.querySelector('#article' + element);
        article.append(fragment);
    }
};

//Función para crear los botones
const crearBoton = () => {
    const boton = document.createElement('button');
    boton.value = 'enviar';
    boton.type = 'button';
    boton.textContent = 'Enviar';
    return boton;
};


//Función para asignar a los botones los ID y subirlos al DOM
const idBotones = (array) => {
    let article = [];
    array.forEach((elemento) => {
        let botonFinal = crearBoton();
        botonFinal.id = elemento.id;
        let index = array.indexOf(elemento);
        article = document.querySelector(`#article${index}`);
        fragment.append(botonFinal);
        article.append(fragment);
    });
};



//Función para meter y mostrar en la nueva section el objeto al que hace referencia el ID
const dibujaFotoGrande = (id) => {
    let encontrado = imagenTexto.find((element) => element.id === id);
    const {src, alt, h3, texto} = encontrado;
    imagenEspecial.alt = alt;
    imagenEspecial.src = src;
    imagenEspecial.id = 'imagen-especial';
    h3Especial.innerHTML = h3;
    parrafoEspecial.innerHTML = texto;

    fragment.append({src, alt, h3, texto});
    imagenEspecial.append(fragment);
    divEspecial.append(imagenEspecial);
    divEspecial.append(h3Especial);
    divEspecial.append(parrafoEspecial);
    articleEspecial.append(divEspecial);

};

//Funcion para ocultar el div con imagen especial y recargar págna
const limpiarImagenEspecial = () => {
    let elementoABorrar = document.querySelector('#especial');
    elementoABorrar.style.display = 'none';
    location.reload();

};


//Funciones para crear del checkbox final
//Función para crear el select
const creaCheckox = () => { 
    menuDestinos.name = 'select';
    menuDestinos.id = 'destinos';
    section3.append(menuDestinos);
};

//Función para crear los option y asignarles valores y contenido
const createOption = () => {
    let option = [];
    for (let element in valoresOption) {
        option = document.createElement('option');
        option.value = valoresOption[element].valor;
        option.text = valoresOption[element].texto;
        fragment.append(option)
    }
    menuDestinos.append(fragment);
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

crearBoton();
idBotones(imagenTexto);