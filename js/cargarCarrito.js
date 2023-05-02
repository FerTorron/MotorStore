// CARGAR PRODUCTOS DEL CARRITO
const cargarProductosCarrito = (carritoArrayProductos) => {
	if (carritoArrayProductos.length > 0){
		productosCarrito.innerHTML = "";
		carritoArrayProductos.forEach((producto) => { productosCarrito.innerHTML += listarProductosCarrito(producto); });
		eliminarProductoCarrito();
		recuperarCarrito();
	} else {
		productosCarrito.innerHTML = `<div class="errorCarrito">
										<h3>⛔ Carrito Vacío</h3>
										<p>Debes Agregar productos al Carrito en Nuestra <a href="../index.html">Home</a></p>
									</div>`
	}
}
setTimeout(() => {
	cargarProductosCarrito(carritoArray);
}, 2000);