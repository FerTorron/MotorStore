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