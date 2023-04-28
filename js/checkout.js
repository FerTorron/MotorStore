// PRODUCTOS CHECKOUT
const productosCheckout = document.querySelector("div.resumenCompra");
const listarProductosCheckout = (producto) => {
	return `<div class="productoResumen">
                <img src="../${producto.img}" alt="${producto.img}">
                <p>${producto.cantidad}</p>
                <p>$${((producto.price) * producto.cantidad).toLocaleString()}</p>
            </div>`;
};

const cargarProductosCheckout = (carritoArrayProductos) => {
    productosCheckout.innerHTML = "";
    carritoArrayProductos.forEach((producto) => { productosCheckout.innerHTML += listarProductosCheckout(producto); });
}
cargarProductosCheckout(carritoArray);

const inputEmail = document.querySelector(".inputEmail");
const inputNombre = document.querySelector(".inputNombre");
const inputApellido = document.querySelector(".inputApellido");
const inputDNI = document.querySelector(".inputDNI");
const inputTelefono = document.querySelector(".inputTelefono");


const realizarPedido = () => {
    let email = inputEmail.value;
    let name = inputNombre.value;
    let apellido = inputApellido.value;
    let dni = inputDNI.value;
    let telefono = inputTelefono.value;

    if ((email !== "") && (name.length > 3) && (apellido.length > 3) && (dni.length == 8) && (telefono.length == 10)){
        Swal.fire({
            title: 'Realizar compra',
            text: `${inputNombre.value} vas a comprar ${carritoArray.length} productos.`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Comprar'
            }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("carrito");
                window.location.reload()
                actualizarTotal();
            }
            })
    } else {
        Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Los Datos no son Válidos',
		})
    }
}
document.querySelector(".inputComprar").addEventListener("click", realizarPedido);