// TABLA CARRITO
const productosCarrito = document.querySelector("div.carritoProductos");
const listarProductosCarrito = (producto) => {
	return `<div class="productoLista">
				<img src="../${producto.img}" alt="${producto.name}">
				<div class="infoProduct tituloProduct">
					<small>Título</small>
					<h3>${producto.name}</h3>
				</div>
				<div class="infoProduct">
					<small>Cantidad</small>
					<h5>${producto.cantidad}</h5>
				</div>
				<div class="infoProduct">
					<small>Precio</small>
					<h5>$${producto.price.toLocaleString()}</h5>
				</div>
				<div class="infoProduct">
					<small>Precio Total</small>
					<h5>$${((producto.price) * producto.cantidad).toLocaleString()}</h5>
				</div>
				<svg id="${producto.id}" class="eliminarProducto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Full"> <path id="Vector" d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#D90C0C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
			</div>`;
};

// ELIMINAR PRODUCTO
const eliminarProductoCarrito = () => {
	const botonesEliminar = document.querySelectorAll(".eliminarProducto");
		botonesEliminar.forEach(boton => {
			boton.addEventListener("click", (e) => {
				if (carritoArray.length === 1){
					localStorage.removeItem("carrito");
					window.location.reload();
				} else {
					let productoAeliminar = carritoArray.findIndex((producto) => producto.id === parseFloat(e.currentTarget.id));
					carritoArray.splice(productoAeliminar, 1)
					guardarCarrito();
					actualizarTotal();
					actualizarCarrito();
					cargarProductosCarrito(carritoArray);

					Toastify({
						text: "Producto Eliminado",
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
				}
			})
		})
}


// TOTAL PRODUCTO CARRITO
const totalCarrito = document.querySelector("#total");
const actualizarTotal = () => {
	totalCarrito.textContent = `$${(carritoArray.reduce((acc, precioProd) => acc + (precioProd.price * precioProd.cantidad), 0)).toLocaleString()}`
}
setTimeout(() => {
	actualizarTotal();
}, 2000);


// COMPRAR CARRITO
function comprarCarrito() {
	if (carritoArray.length > 0){
		window.location.href = "checkout.html";
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'El Carrito está Vacío',
		})
	}
}
document.querySelector("button.comprarCarrito")?.addEventListener("click", comprarCarrito);

// VACIAR CARRITO
function vaciarCarrito() {

	if (carritoArray.length > 0){
		Swal.fire({
			title: '¿Estás seguro de eliminar todos los productos?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, elimínalos!'
		  }).then((result) => {
			if (result.isConfirmed) {
				localStorage.removeItem("carrito");
				window.location.reload();
				actualizarTotal();
			}
		  })  
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'No hay productos en tu Carrito',
		})
	}
}
document.querySelector(".vaciarCarrito")?.addEventListener("click", vaciarCarrito);

// TOOLTIP
tippy('#myButton', {
	content: 'motorstore@gmail.com',
  });