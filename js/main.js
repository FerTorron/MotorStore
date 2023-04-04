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
document.querySelector(".comprarBtn").addEventListener("click", nuevoProducto);

// DOM PRODUCTO
const containerProducts = document.querySelector("div.newProducts__catalogue");

const retornarProducto = (producto) => {
	return `<div class="catalogue__product">
				<img src="${producto.img}">
				<span>$${producto.price}</span>
				<button id="btnAgregarCarrito" class="btnAgregarCarrito transition">Agregar al Carrito</button>
			</div>`;
};

const cargarProducto = (productosArray) => {
	containerProducts.innerHTML = "";
	productosArray.forEach((producto) => {
		containerProducts.innerHTML += retornarProducto(producto);
	});
	
};
cargarProducto(productos);

// COMPRAR PRODUCTO - SOLO ANDA ANTES DE cargarProducto()
const comprar = () => {
	carrito += 1;
	carritoNumber.innerHTML = carrito;
}
document.querySelector(".btnAgregarCarrito").addEventListener("click", comprar);