var botonMenu = document.querySelector('.boton_menu');
var menu = document.querySelector('header nav');
var html = document.querySelector('html');

var abiertoMenu = false;

botonMenu.addEventListener('click', function() {

    if(!abiertoMenu) {
        menu.style.marginLeft = "0%";
        html.style.overflow = "hidden";
        abiertoMenu = true;
    }else{
        menu.style.marginLeft = "-100%";
        html.style.overflowY = "scroll";
        abiertoMenu = false;
    }

})