'use strict';

import '../css/styles.css'
import { cargaCabecera } from './cabecera'

document.addEventListener('DOMContentLoaded', function () {
	//Borramos el primer hijo
	let primerHijo = document.querySelector('#contenedor > div');
	primerHijo.parentElement.removeChild(primerHijo);
	fetch('http://localhost:3000/tasks')
		.then(
			respuesta => respuesta.json()
		).then(
			objTarea => {
				pintarTareas(objTarea);//Llamada a la funcion pintar tareas
			});
//Funcion que nos pinta las tareas y las modifica dependiendo del id que le pasemos
	function pintarTareas(objTarea) {
		let contenedor = document.querySelector('#contenedor');
		for (let tareaobj of objTarea) {
			let pendiente = '';
			let haciendo = '';
			let completado = '';
			if (tareaobj.estado[0] === 'pendiente') {
				pendiente = 'selected';
			}
			if (tareaobj.estado[0] === 'haciendo') {
				haciendo = 'selected';
			}
			if (tareaobj.estado[0] === 'completada') {
				completado = 'selected';
			}
			let divCard = document.createElement('div');
			divCard.classList.add('card');
			divCard.innerHTML +=
                `<div class="card-body">
                <h5 class="card-title">Título
                <input type="text" class="card-title" value="${tareaobj.titulo}">
                </h5>
                <p class="card-text">Descripción</p>
                <textarea class="form-control" id="descripcion" rows="5">${tareaobj.descripcion}</textarea>
            </div>
            <div class="card-footer">
               <label class="col-form-label" for="estado" >Estado:</label>
                <select class="col-sm-10" id="estado">
                <option value="pendiente"${pendiente}>pendiente</option>
                <option value="haciendo"${haciendo}>haciendo</option>
                <option value="completada"${completado}>completada</option>
                </select>
                <label class="col-form-label" for="fechayhora" >Fecha y hora:</label>
                <input type="datetime" class="col-sm-9" id="fechayhora" value="${tareaobj.fecha_creacion}">
                <button type="submit" id="botonActualizar" class="btn btn-primary btn-lg btn-block">Actualizar</button>
            </div>`;

			contenedor.appendChild(divCard);
			//Cuando damos click en el boton modifica nuestra tarea mediante el id
			divCard.querySelector('button').addEventListener('click', function () {
				let titulo = divCard.querySelector('input[type=text]').value;
				let descripcion = divCard.querySelector('textarea').value;
				let estado = divCard.querySelector('select').options[divCard.querySelector('select').selectedIndex].value;
				let fechaYHora = divCard.querySelector('input[type=datetime]').value;
				divCard = location.href = 'index.html';
				fetch(`http://localhost:3000/tasks/${tareaobj._id}`, {
					method: 'put',
					headers: {
						'Accept': 'application/json, text/plain, /',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						titulo: titulo,
						descripcion: descripcion,
						estado: estado,
						fecha_creacion: fechaYHora
					})
				}).then(res => res.json())
					.then(res => console.log(res))
					.catch(error => {
						console.log(error.message);
					});
			});

		}
	}
});