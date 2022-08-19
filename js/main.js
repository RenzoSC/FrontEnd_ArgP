
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementById('nav_').style.top = '0';
    }else{
        document.getElementById('nav_').style.top = '-235px'
    }
    ubicacionPrincipal = desplazamientoActual
}