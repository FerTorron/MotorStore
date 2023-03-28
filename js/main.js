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

// CREAR ID - LISTA DE PRODUCTOS - AGREGAR PRODUCTOS
const crearID = () => {
	return parseInt(Math.random() * 10000);
}

const productos = [
	{id: crearID(), name: 'Casco LS2 Mate', price: 59390, stock: 15},
	{id: crearID(), name: 'Campera STAV', price: 103899, stock: 5},
	{id: crearID(), name: 'Guantes GAV', price: 14604, stock: 24},
	{id: crearID(), name: 'Casco LS2 Brilloso', price: 89900, stock: 19},
	{id: crearID(), name: 'Campera Davo', price: 66490, stock: 4}
]

const nuevoProducto = () => {
	let id = crearID();
	let name = prompt('Nombre del Producto:')
	let price = parseFloat(prompt('Precio del Producto:').toFixed(2));
	let stock = parseInt(prompt('Stock del Producto:'))
	let newProduct = {id: id, name: name, price: price, stock: stock}
	productos.push(newProduct)
}