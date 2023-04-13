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

	if ((name.length > 3) && (typeof price == 'number') && (typeof stock == 'number')){
		let newProduct = {id: id, name: name, price: price, stock: stock, img: "assets/logo/logo.webp"};
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
				<img src="${producto.img}">
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
				})
			}
		}
}

const cargarProducto = (productosArray) => {
	containerProducts.innerHTML = "";
	productosArray.forEach((producto) => { containerProducts.innerHTML += retornarProducto(producto); });	
	agregarCarrito();
};
cargarProducto(productos);


// TABLA CARRITO
const listarProductosCarrito = () => {
    let tablaCarrito = "";
    const tabla = document.querySelector("tbody.tCarrito");
        tabla.innerHTML = "";
        for (prodCarro of carritoArray) {
            tablaCarrito += `<tr>
								<td>${prodCarro.id}</td>
								<td>${prodCarro.name}</td>
								<td>$ ${(prodCarro.price * 1.21).toLocaleString()}</td>
							<tr>`;
        }
        tabla.innerHTML = tablaCarrito;
}

const mostrarTablaCarrito = () => {
	document.getElementById("tablaCarrito").classList.toggle("mostrarTabla");
	listarProductosCarrito();
}
document.getElementById("carrito").addEventListener("click", mostrarTablaCarrito);
document.getElementById("closeTableCart").addEventListener("click", mostrarTablaCarrito);

// BUSCAR PRODUCTO POR NOMBRE
const inputSearch = document.querySelector("#inputSearch");
const filtrarProductos = () => {
	let productoBuscar = productos.filter((producto) => producto.name.toLowerCase().includes(inputSearch.value.toLowerCase().trim()));
	productoBuscar !== [] && cargarProducto(productoBuscar)
}
inputSearch.addEventListener("search", filtrarProductos)