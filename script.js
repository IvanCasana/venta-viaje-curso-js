
import { barcelona, roma, paris, londres } from './ciudades.js';


let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento=document.getElementById('precio')

console.log(enlaces)

//agregar clik a cada enlace
enlaces.forEach(function (enlace) 
{
    enlace.addEventListener('click', function () 
    {
        console.log('enlace', enlace)

        //remover la calse 'active' en los enlaces
        enlaces.forEach(function (enlace) 
        {
            enlace.classList.remove('active');
        })

        //agregar la clase 'active' al enlace que se ha clickeado
        this.classList.add('active');

        let contenido = obtenerContenido(this.textContent);
        tituloElemento.textContent = contenido.titulo;
        subtituloElemento.textContent = contenido.subtitulo;
        parrafoElemento.textContent = contenido.parrafo;
        precioElemento.textContent=contenido.precio;


    })
})










    function obtenerContenido(enlace) {
        let contenido = {
            'Barcelona': barcelona,
            'Roma': roma,
            'París': paris,
            'Londres': londres
        }
        return contenido[enlace];
    }