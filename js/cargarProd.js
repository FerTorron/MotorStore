// SI EXISTE UN STORAGE DE LOS PRODUCTOS, CARGA ESE STORAGE
// SI FUE RESTABLECIDO DE FABRICA (ELIMINADO), CARGA EL JSON

if (productos.length === 0) {
	fetch(URL)
		.then((respuesta) => respuesta.json())
		.then((data) => productos.push(...data))
		.then(() => cargarProducto(productos))
} else {
	cargarProducto(productos)
}