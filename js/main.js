// MENU HAMBURGUESA
document.getElementById("btn-menu").addEventListener("click", mostrar_menu);
function mostrar_menu(){
	document.getElementById("nav").classList.toggle('move-nav');
}

window.addEventListener("resize", function(){
	if (window.innerWidth > 700) {
		document.getElementById("nav").classList.remove('move-nav');
	}
})


// PRE-ENTREGA #1
const usuario = prompt("🏍️ Bienvenido a MotorStore ¿Cuál es tu Nombre?");
const IVA = 1.21;
let precioTotal = 0;

let precioCasco = 59390;
let precioCampera = 103899;
let precioGuantes = 14604;
let precioMedias = 3973;
let precioAntiparras = 9631;

let stockCasco = 14;
let stockCampera = 5;
let stockGuantes = 23;
let stockMedias = 53;
let stockAntiparras = 21;

const consultarStock = () => {
	let respuesta = prompt(`👋 Hola ${usuario} ¿De cuál producto quiere consultar su stock? \n1) Casco \n2) Campera \n3) Guantes \n4) Medias \n5) Antiparras`).trim();

	if (respuesta == 1){
		alert(`El Stock de los Cascos es de ${stockCasco}.`);
		saberPrecio = confirm("¿Quéres saber el precio por unidad?");
		while (saberPrecio){
			alert(`El precio por unidad de los cascos es de ${precioCasco}\nEl precio con IVA es de ${precioCasco * IVA}`);
			break
		}
	} else if (respuesta == 2){
		alert(`El Stock de las Camperas es de ${stockCampera}.`);
		saberPrecio = confirm("¿Quéres saber el precio por unidad?");
		while (saberPrecio){
			alert(`El precio por unidad de las camperas es de ${precioCampera}\nEl precio con IVA es de ${precioCampera * IVA}`);
			break
		}
	} else if (respuesta == 3){
		alert(`El Stock de los Guantes es de ${stockGuantes}.`);
		saberPrecio = confirm("¿Quéres saber el precio por unidad?");
		while (saberPrecio){
			alert(`El precio por unidad de los Guantes es de ${precioGuantes}\nEl precio con IVA es de ${precioGuantes * IVA}`);
			break
		}
	} else if (respuesta == 4){
		alert(`El Stock de las Medias es de ${stockMedias}.`);
		saberPrecio = confirm("¿Quéres saber el precio por unidad?");
		while (saberPrecio){
			alert(`El precio por unidad de las Medias es de ${precioMedias}\nEl precio con IVA es de ${precioMedias * IVA}`);
			break
		}
	} else if (respuesta == 5){
		alert(`El Stock de las Antiparras es de ${stockAntiparras}.`);
		saberPrecio = confirm("¿Quéres saber el precio por unidad?");
		while (saberPrecio){
			alert(`El precio por unidad de las Antiparras es de ${precioAntiparras}\nEl precio con IVA es de ${precioAntiparras * IVA}`);
			break
		}
	} else {
		alert("⛔ No es una Respuesta Válida");
	}
}

const comprarStock = () => {
	let respuesta = prompt(`👋 Hola ${usuario} ¿Qué Producto desea comprar? \n1) Casco \n2) Campera \n3) Guantes \n4) Medias \n5) Antiparras`).trim();
	switch (respuesta){
		case "1":
			stockCasco -= 1;
			precioTotal += precioCasco * IVA;
			alert(`🛒 Compraste un Casco, el nuevo stock de cascos es de ${stockCasco}.`);
			break;
		case "2":
			stockCampera -= 1;
			precioTotal += precioCampera * IVA;
			alert(`🛒 Compraste una Campera, el nuevo stock de camperas es de ${stockCampera}.`);
			break;
		case "3":
			stockGuantes -= 1;
			precioTotal += precioGuantes * IVA;
			alert(`🛒 Compraste un par de Guantes, el nuevo stock de guantes es de ${stockGuantes}.`);
			break;
		case "4":
			stockMedias -= 1;
			precioTotal += precioMedias * IVA;
			alert(`🛒 Compraste un par de Medias, el nuevo stock de medias es de ${stockMedias}.`);
			break;
		case "5":
			stockAntiparras -= 1;
			precioTotal += precioAntiparras * IVA;
			alert(`🛒 Compraste unas Antiparras, el nuevo stock de antiparras es de ${stockAntiparras}.`);
			break;
		default:
			alert("⛔ No es una Respuesta Válida");
	}
}

const mostrarPrecioTotal = () => {
	return alert(`El Precio Total es de ${precioTotal}`);
}

document.getElementById("consultarStock").addEventListener("click", consultarStock);
document.getElementById("comprarStock").addEventListener("click", comprarStock);
document.getElementById("carrito").addEventListener("click", mostrarPrecioTotal);