// CREAR ID DE CADA PRODUCTO
const crearID = () => {
	return parseInt(Math.random() * 10000);
};

// STORAGE DE PRODUCTOS
const guardarProductosStorage = () => {
	productos.length > 0 ? localStorage.setItem("productos", JSON.stringify(productos)) : 0;
}
const recuperarProductosStorage = () => {
    return JSON.parse(localStorage.getItem("productos"));
}
const restablecerProductos = () => {
	localStorage.removeItem("productos");
	window.location.reload();
}
document.querySelector(".btnRestablecer")?.addEventListener("click", restablecerProductos);




// GUARDAR CARRITO EN STORAGE
function guardarCarrito(){
	carritoArray.length > 0 ? localStorage.setItem("carrito", JSON.stringify(carritoArray)) : 0;
}

function recuperarCarrito(){
    return JSON.parse(localStorage.getItem("carrito"));
}