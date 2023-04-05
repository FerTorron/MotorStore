// MOSTRAR CANTIDAD EN EL CARRITO
const carritoNumber = document.querySelector("span.carritoNumber");
	let carrito = 0;
	let carritoArray = [];
	carritoNumber.innerHTML = carrito;


// CREAR ID DE CADA PRODUCTO
const crearID = () => {
	return parseInt(Math.random() * 10000);
};


// arrayDeObjetos DE TODOS LOS PRODUCTOS
const productos = [
	{id: crearID(), name: 'Casco LS2 Mate', price: 59390, stock: 15, img: "assets/img/products/casco1.webp"},
	{id: crearID(), name: 'Campera STAV', price: 103899, stock: 5, img: "assets/img/products/campera1.webp"},
	{id: crearID(), name: 'Guantes GAV', price: 14604, stock: 24, img: "assets/img/products/guantes.webp"},
	{id: crearID(), name: 'Casco LS2 Brilloso', price: 89900, stock: 19, img: "assets/img/products/casco2.webp"},
	{id: crearID(), name: 'Campera Davo', price: 66490, stock: 4, img: "assets/img/products/campera2.webp"}
];


// AGREGAR NUEVO PRODUCTO AL ARRAY
const nuevoProducto = () => {
	let id = crearID();
	let name = prompt('Nombre del Producto:');
	let price = parseFloat(prompt('Precio del Producto:'));
	let stock = parseInt(prompt('Stock del Producto:'));
	let newProduct = {id: id, name: name, price: price, stock: stock, img: "assets/logo/logo.webp"};
	productos.push(newProduct);
	cargarProducto(productos);
};
document.querySelector(".agregarProducto").addEventListener("click", nuevoProducto);


// PRODUCTOS EN LA TABLA
const mostrarTabla = () => {
	document.getElementById("tablaProductos").classList.toggle("mostrarTabla");
}
document.getElementById("mostrarProductos").addEventListener("click", mostrarTabla);
document.getElementById("closeTable").addEventListener("click", mostrarTabla);

const listarProductos = () => { //no le demos bola por ahora
    let contenidoTablaHTML = "";
    const tabla = document.querySelector("tbody");
        tabla.innerHTML = "";
        for (producto of productos) {
            contenidoTablaHTML += `<tr>
                                       <td>${producto.id}</td>
                                       <td>${producto.name}</td>
                                       <td>$ ${producto.price.toLocaleString()}</td>
									   <td>$ ${(producto.price * 1.21).toLocaleString()}</td>
                                       <td>${producto.stock}</td>
                                   <tr>`;
        }
        tabla.innerHTML = contenidoTablaHTML;
}


// TARJETAS PRODUCTOS
const containerProducts = document.querySelector("div.newProducts__catalogue");

const retornarProducto = (producto) => {
	return `<div class="catalogue__product">
				<img src="${producto.img}">
				<span>$ ${producto.price.toLocaleString()}</span>
				<button id="btnAgregarCarrito" class="btnAgregarCarrito transition">Agregar al Carrito</button>
			</div>`;
};

const cargarProducto = (productosArray) => {
	containerProducts.innerHTML = "";
	productosArray.forEach((producto) => {
		containerProducts.innerHTML += retornarProducto(producto);
	});
	listarProductos();
	
};
cargarProducto(productos);


// COMPRAR PRODUCTO - SOLO ANDA ANTES DE cargarProducto()
const agregarCarrito = () => {
	carrito += 1;
	carritoNumber.innerHTML = carrito;
}
document.querySelector(".btnAgregarCarrito").addEventListener("click", agregarCarrito);


// BUSCAR PRODUCTO POR ID -- NO FUNCIONA SI PONE ALGO ERRONEO
let productoEncontrado = [];
const buscarID = () => {
	productoEncontrado = [];
	let IdBuscar = prompt("ID del Producto:");
	productos.find((producto) => {
		if (producto.id == IdBuscar){
			productoEncontrado.push(producto);
		}
	});
	
	for (productoVar of productoEncontrado){
		alert(`ID: ${productoVar.id}\nNOMBRE: ${productoVar.name}\nPRECIO: ${productoVar.price}\nSTOCK: ${productoVar.stock}`)
	}
}
document.querySelector(".buscarProducto").addEventListener("click", buscarID);