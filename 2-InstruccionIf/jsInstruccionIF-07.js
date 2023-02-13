function mostrar()
{
let edadIngresada
let estadoCivil

edadIngresada = document.getElementById("txtIdEdad").value;
edadIngresada = parseInt(edadIngresada);

estadoCivil = document.getElementById("estadoCivil").value;

if(edadIngresada <18 && estadoCivil != "Soltero")
{
	alert("Sos muy pequeño para no ser soltero");
}

}//FIN DE LA FUNCIÓN