'use strict';

import '../css/styles.css'
import {Tarea} from './tarea'
import { cargaCabecera } from './cabecera'

document.addEventListener('DOMContentLoaded', main);

function main() {

	//Borramos el primer hijo
	let contenedor = document.querySelector('#contenedor');
	let primerHijo = document.querySelector('#contenedor > div');
	primerHijo.parentElement.removeChild(primerHijo);
	//Fetch para mostrar las tareas
	fetch('http://localhost:3000/tasks')
		.then(
			respuesta => respuesta.json()
		).then(
			objTarea => {
				let arrayTarea = [];
				for (let tareaObj of objTarea) {
					arrayTarea.push(new Tarea(tareaObj));
				}
				return arrayTarea;
			}
		).then(
			arrayTarea => {
				for (let tareaObj of arrayTarea) {
					tareaObj.toDiv(contenedor);
				}
			}
		);
}