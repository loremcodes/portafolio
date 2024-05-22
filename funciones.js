window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY > 0);
    
    const menuItems = document.querySelectorAll(".nav__li");
    menuItems.forEach(item => {
        item.style.color = "#ffff";
    });
});


function mostrarInformacion(id) {
    // Ocultar todas las secciones de información
    const secciones = document.querySelectorAll('.cronograma_day');
    secciones.forEach(function (seccion) {
        seccion.style.display = 'none';
    });
    // Mostrar la} sección de información correspondiente al botón clicado
    const seccionSeleccionada = document.getElementById(id);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';
    }
}


const carruselPropuesta = document.querySelector(".carrusel__propuesta"),
    firstImg = carruselPropuesta.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".svgPropuesta");

let isDragStart = false,
    prevPageX,
    prevScrollLeft; // Se agregó una coma aquí

let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        carruselPropuesta.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.clientX; // Se cambió de e.pageX a e.clientX
    prevScrollLeft = carruselPropuesta.scrollLeft;
};

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.clientX - prevPageX; // Se cambió de e.pageX a e.clientX
    carruselPropuesta.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
    isDragStart = false;
};

carruselPropuesta.addEventListener("mousedown", dragStart);
carruselPropuesta.addEventListener("mousemove", dragging);
carruselPropuesta.addEventListener("mouseup", dragStop);
carruselPropuesta.addEventListener("mouseleave", dragStop); // Detie





/*carrusel_flyers*/

const carruselFlyersUndc = document.querySelector(".carrusel__flyers"),
    primerFlyer = carruselFlyersUndc.querySelectorAll(".imgFlyer")[0],
    iconosFlechaFlyer = document.querySelectorAll(".svgFlyer");

let esInicioArrastreFlyer = false,
    paginaXAnteriorFlyer,
    scrollIzquierdaAnteriorFlyer;

let anchoPrimerFlyer = primerFlyer.clientWidth + 14;

iconosFlechaFlyer.forEach((icono) => {
    icono.addEventListener("click", () => {
        carruselFlyersUndc.scrollLeft += icono.id === "leftFlyer" ? -anchoPrimerFlyer : anchoPrimerFlyer;
    });
});

const inicioArrastreFlyer = (e) => {
    esInicioArrastreFlyer = true;
    paginaXAnteriorFlyer = e.clientX; 
    scrollIzquierdaAnteriorFlyer = carruselFlyersUndc.scrollLeft;
};

const arrastrandoFlyer = (e) => {
    if (!esInicioArrastreFlyer) return;
    e.preventDefault();
    let diferenciaPosicionFlyer = e.clientX - paginaXAnteriorFlyer; 
    carruselFlyersUndc.scrollLeft = scrollIzquierdaAnteriorFlyer - diferenciaPosicionFlyer;
};

const detenerArrastreFlyer = () => {
    esInicioArrastreFlyer = false;
};

carruselFlyersUndc.addEventListener("mousedown", inicioArrastreFlyer);
carruselFlyersUndc.addEventListener("mousemove", arrastrandoFlyer);
carruselFlyersUndc.addEventListener("mouseup", detenerArrastreFlyer);
carruselFlyersUndc.addEventListener("mouseleave", detenerArrastreFlyer);