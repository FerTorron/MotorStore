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
document.querySelector(".btnRestablecer").addEventListener("click", restablecerProductos);
// arrayDeObjetos DE TODOS LOS PRODUCTOS
const productos = recuperarProductosStorage() || [
	{id: crearID(), name: 'Casco LS2 Mate', price: 59390, stock: 15, categoria: "casco", img: "assets/img/products/casco1.webp"},
	{id: crearID(), name: 'Campera STAV', price: 103899, stock: 5, categoria: "campera", img: "assets/img/products/campera1.webp"},
	{id: crearID(), name: 'Guantes GAV', price: 14604, stock: 24, categoria: "guantes", img: "assets/img/products/guantes.webp"},
	{id: crearID(), name: 'Casco LS2 Brilloso', price: 89900, stock: 19, categoria: "casco", img: "assets/img/products/casco2.webp"},
	{id: crearID(), name: 'Campera Davo', price: 66490, stock: 4, categoria: "campera", img: "assets/img/products/campera2.webp"},
	{id: crearID(), name: 'Antiparra Roja', price: 4598, stock: 7, categoria: "accesorios", img: "assets/img/products/antiparra.webp"},
	{id: crearID(), name: 'Antiparra Blanca', price: 5200, stock: 2, categoria: "accesorios", img: "assets/img/products/antiparra2.webp"},
	{id: crearID(), name: 'Botas Negras', price: 24856, stock: 11, categoria: "botas", img: "assets/img/products/botas.webp"},
	{id: crearID(), name: 'Botas Blancas', price: 28567, stock: 4, categoria: "botas", img: "assets/img/products/botas2.webp"},
	{id: crearID(), name: 'Campera Clasica', price: 68490, stock: 1, categoria: "campera", img: "assets/img/products/campera3.webp"},
	{id: crearID(), name: 'Casco Multi', price: 65000, stock: 4, categoria: "casco", img: "assets/img/products/casco3.webp"},
	{id: crearID(), name: 'Campera Roja', price: 68000, stock: 1, categoria: "campera", img: "assets/img/products/campera4.webp"},
	{id: crearID(), name: 'Mochila', price: 42000, stock: 24, categoria: "accesorios", img: "assets/img/products/mochila.webp"},
	{id: crearID(), name: 'Medias Termicas', price: 4100, stock: 4, categoria: "accesorios", img: "assets/img/products/mediatermica.webp"},
	{id: crearID(), name: 'Guantes Marrones', price: 12540, stock: 7, categoria: "guantes", img: "assets/img/products/guantes2.webp"}
];

// GUARDAR CARRITO EN STORAGE
function guardarCarrito(){
	carritoArray.length > 0 ? localStorage.setItem("carrito", JSON.stringify(carritoArray)) : 0;
}

function recuperarCarrito(){
    return JSON.parse(localStorage.getItem("carrito"));
}