'use strict';

import '../css/styles.css'
import { cargaCabecera } from './cabecera'

document.addEventListener('DOMContentLoaded', main);
//Funcion principal
function main() {
	//Eliminamos el primer hijo
	let primerHijo = document.querySelector('#contenedor > div');
	primerHijo.parentElement.removeChild(primerHijo);
	fetch('http://localhost:3000/tasks') //Fetch que llama a la funcion eliminar
		.then(
			respuesta => respuesta.json()
		).then(
			objTarea => {
				eliminarTarea(objTarea);
			});
}
//Funcion que nos elimina una tarea
function eliminarTarea(objTarea) {
	let contenedorEliminar = document.querySelector('#contenedor');
	for (let tareaobj of objTarea) {
		let spanEstados = '';
		if (tareaobj.estado[0] === 'pendiente') {
			spanEstados = 'badge badge-danger';
		}
		if (tareaobj.estado[0] === 'haciendo') {
			spanEstados = 'badge badge-warning';
		}
		if (tareaobj.estado[0] === 'completada') {
			spanEstados = 'badge badge-success';
		}
		let divCard = document.createElement('div');
		divCard.classList.add('card');
		divCard.innerHTML +=
            `
            <div class="card-body">
                <h5 class="card-title">${tareaobj.titulo}</h5>
                <p class="card-text">${tareaobj.descripcion}</p>
            </div>
            <div class="card-footer">
                <p class="card-text"><span class="${spanEstados}" id="estado">${tareaobj.estado}</span> <span id="fecha"> ${tareaobj.fecha_creacion}</span></p>
                <button type="submit" id="botonEliminar" class="btn btn-primary btn-lg btn-block">Eliminar</button>
            </div>
            `;
		contenedorEliminar.appendChild(divCard);
		//Cuando pulsamos el boton elimina la tarea por el id de esta
		divCard.querySelector('button').addEventListener('click', function () {
			fetch(`http://localhost:3000/tasks/${tareaobj._id}`, {
				method: 'delete',
				headers: {
					'Accept': 'application/json, text/plain, /',
					'Content-Type': 'application/json'
				},
			}).then(res => res.json())
				.then(res => console.log(res))
				.catch(error => {
					console.log(error.message);
				});
			window.location.reload();//Recargamos la pagina para que no se nos muestre la tarea ya eliminada
		});

	}

}