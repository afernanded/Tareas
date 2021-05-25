'use strict';

document.addEventListener('DOMContentLoaded', cargaCabecera)
module.exports = { cargaCabecera }

const rutaProyecto = '/UT5/EjercicioUT5/dist/';

function esActiva(cabecera, pagina) {
	return cabecera.getAttribute('pagina') === pagina ? 'active' : '';
}

function cargaCabecera() {

	let cuerpo = document.querySelector('body')
	let divCabecera = document.querySelector('#cabecera-propia')
	divCabecera.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item ${esActiva(divCabecera, 'ver')}">
                <a class="nav-link" href="${rutaProyecto}">Tareas <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ${esActiva(divCabecera, 'crear')}">
                <a class="nav-link" href="${rutaProyecto}crear.html">Crear nueva tarea</a>
            </li>
            <li class="nav-item ${esActiva(divCabecera, 'modificar')}">
                <a class="nav-link" href="${rutaProyecto}modificar.html">Modificar tarea</a>
            </li>
            <li class="nav-item ${esActiva(divCabecera, 'eliminar')}">
                <a class="nav-link" href="${rutaProyecto}eliminar.html">Eliminar tarea</a>
            </li>
        </ul>
    </div>
</nav>`
	cuerpo.insertBefore(divCabecera, document.querySelector('body > div'))
}