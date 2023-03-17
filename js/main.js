document.getElementById("btn-menu").addEventListener("click", mostrar_menu);
function mostrar_menu(){
	document.getElementById("nav").classList.toggle('move-nav');
}

window.addEventListener("resize", function(){
	if (window.innerWidth > 700) {
		document.getElementById("nav").classList.remove('move-nav');
	}
})