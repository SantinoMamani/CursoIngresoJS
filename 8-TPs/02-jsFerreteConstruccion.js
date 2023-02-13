/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let alambre;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    alambre = largo * 2 + ancho * 2;

    alert("Se necesitara comprar " + alambre + " metros de alambre")
}
function Circulo () 
{
	let alambre;
    let perimetro;
    let radio;
    let pi;

    radio = parseInt(document.getElementById("txtIdRadio").value);
    pi = 3.14;
    
    
    perimetro = pi * radio * 2;
    alambre = perimetro * 3;


    alert("Se necesitara comprar " + alambre + " metros de alambre")
}
function Materiales () 
{
	let ancho
    let largo
    let materiales1
    let materiales2

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    materiales1 = (largo * ancho) * 2;
    materiales2 = (largo * ancho) * 3;

    alert("se necesitan " + materiales1 + " bolsas de cemento " + " y " + materiales2 + " bolsas de cal")

}