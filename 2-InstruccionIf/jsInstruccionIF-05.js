function mostrar()
{
	let edadIngresada

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada)
	
	
	if(edadIngresada >18)	
	{
		alert("No sos un adulto")
	}
}