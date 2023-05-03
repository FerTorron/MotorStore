// MENU HAMBURGUESA
document.getElementById("btn-menu").addEventListener("click", mostrar_menu);
function mostrar_menu(){
	document.getElementById("nav").classList.toggle('move-nav');
}

window.addEventListener("resize", function(){
	window.innerWidth > 700 ? document.getElementById("nav").classList.remove('move-nav') : 0;
})

// MENU ADMIN
document.getElementById("adminMenuBtn")?.addEventListener("click", mostrarMenuAdmin);
document.getElementById("btnClose")?.addEventListener("click", mostrarMenuAdmin);
function mostrarMenuAdmin(){
	document.getElementById("adminMenu").classList.toggle('move-adminMenu');
	document.getElementById("newProduct").classList.toggle('move-newProduct');
}

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