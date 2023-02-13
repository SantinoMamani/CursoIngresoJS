function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	let destinoIngresado  =txtIdDestino.value;
	let base = 15000;
	
	switch (estacionIngresada) {
	case "Invierno":
	switch (destinoIngresado) {
		case "Bariloche":
			alert(base*1.2);
			break;
		case "Cordoba":
			alert(base*0.9);
			break;
		case "Mar del plata":
			alert(base*0.8);
			break;
		default: 
			alert(base);
			break;
}
break;
	case "Verano":
		switch(destinoIngresado) {
			case "Bariloche":
				alert (base*0.8);
			break;
		case "Cataratas":
		case "Cordoba":
			alert(base*1.1);
		break;
		case "Mar del plata":
			alert(base*1.2);
			default:
				alert(base);
		break;
}
break;	

    default:
		switch(destinoIngresado) {
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
				alert(base*1.1);
			break;
		default:
			alert(base);
			break;
}
break;

}
}//FIN DE LA FUNCIÓN