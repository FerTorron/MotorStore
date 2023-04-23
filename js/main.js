// MOSTRAR CANTIDAD EN EL CARRITO
let carritoArray = recuperarCarrito() || [];
const carritoNumber = document.querySelector("span.carritoNumber");
const actualizarCarrito = () => {
	carritoNumber.textContent = carritoArray.length;
}
actualizarCarrito();

// TARJETAS PRODUCTOS
const containerProducts = document.querySelector("div.newProducts__catalogue");
const retornarProducto = (producto) => {
	return `<div class="catalogue__product">
				<img src="${producto.img}" alt="${producto.name}">
				<span>$ ${producto.price.toLocaleString()}</span>
				<button id="${producto.id}" class="btnAgregarCarrito transition">Agregar al Carrito</button>
			</div>`;
};

// AGREGAR NUEVO PRODUCTO
const inputName = document.querySelector(".inputName");
const inputPrice = document.querySelector(".inputPrice");
const inputStock = document.querySelector(".inputStock");
const inputButton = document.querySelector(".inputButton");

const agregarProducto = () => {
	let name = inputName.value;
	let price = parseFloat(inputPrice.value);
	let stock = parseFloat(inputStock.value);
	if ((name.length > 3) && (price > 0) && (stock > 0)){
		let newProduct = {id: crearID(), name: name, price: price, stock: stock, img: "assets/logo/logo.webp"};
		productos.push(newProduct);
		cargarProducto(productos);
		guardarProductosStorage();

		Swal.fire(
			'Excelente!',
			'Producto Agregado con Éxito',
			'success'
		  )

	} else {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Los Datos no son Válidos',
			footer: 'El nombre debe tener mínimo 3 letras'
		  })
	}
}
inputButton.addEventListener("click", agregarProducto);


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
						position: "center", // `left`, `center` or `right`
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

// TOOLTIP
tippy('#myButton', {
	content: 'motorstore@gmail.com',
  });