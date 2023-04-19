// MOSTRAR CANTIDAD EN EL CARRITO
let carritoArray = recuperarCarrito() || [];
const carritoNumber = document.querySelector("span.carritoNumber");
const actualizarCarrito = () => {
	carritoNumber.textContent = carritoArray.length;
}
actualizarCarrito();

// AGREGAR NUEVO PRODUCTO AL ARRAY
const nuevoProducto = () => {
	let id = crearID();
	let name = prompt('Nombre del Producto:');
	let price = parseFloat(prompt('Precio del Producto:'));
	let stock = parseInt(prompt('Stock del Producto:'));

	if ((name.length > 3) && (typeof price === 'number') && (typeof stock === 'number')){		let newProduct = {id: id, name: name, price: price, stock: stock, img: "assets/logo/logo.webp"};
		productos.push(newProduct);
		cargarProducto(productos);
	} else {
		alert("⛔ Disculpa, Los Datos no son Válidos");
	}
};
document.querySelector(".agregarProducto").addEventListener("click", nuevoProducto);

// TARJETAS PRODUCTOS
const containerProducts = document.querySelector("div.newProducts__catalogue");
const retornarProducto = (producto) => {
	return `<div class="catalogue__product">
				<img src="${producto.img}" alt="${producto.name}">
				<span>$ ${producto.price.toLocaleString()}</span>
				<button id="${producto.id}" class="btnAgregarCarrito transition">Agregar al Carrito</button>
			</div>`;
};

// COMPRAR PRODUCTO
const agregarCarrito = () => {
	const botonesCart = document.querySelectorAll(".btnAgregarCarrito")
		if (botonesCart !== null){
			for (const boton of botonesCart){
				boton.addEventListener("click", (e) => {
					let productoAgregado = productos.find((producto) => producto.id === parseInt(e.target.id))
					carritoArray.push(productoAgregado);
					actualizarCarrito();
					guardarCarrito();

					Toastify({
						text: "Producto Agregado",
						duration: 3000,
						close: true,
						gravity: "top", // `top` or `bottom`
						position: "right", // `left`, `center` or `right`
						stopOnFocus: true, // Prevents dismissing of toast on hover
						style: {
						background: "#D90C0C",
						},
						onClick: function(){} // Callback after click
						}).showToast();
				})
			}
		}
}


// CARGAR CADA PRODUCTO
const cargarProducto = (productosArray) => {
	containerProducts.innerHTML = "";
	productosArray.forEach((producto) => { containerProducts.innerHTML += retornarProducto(producto); });	
	agregarCarrito();
};
cargarProducto(productos);


// BUSCAR PRODUCTO POR NOMBRE
const inputSearch = document.querySelector("#inputSearch");
const filtrarProductos = () => {
	let productoBuscar = productos.filter((producto) => producto.name.toLowerCase().includes(inputSearch.value.toLowerCase().trim()));
	productoBuscar !== [] && cargarProducto(productoBuscar)
}
inputSearch.addEventListener("search", filtrarProductos)