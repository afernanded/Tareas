'use strict';
//Importamos estilos y cabecera
import '../css/styles.css'
import { cargaCabecera } from './cabecera'

document.addEventListener('DOMContentLoaded', function (){
	//Declaramos variables
	let titulo = document.querySelector('#titulo');
	let descripcion = document.querySelector('#descripcion');
	let estado = document.querySelector('#estado');
	let fecha = document.querySelector('#fecha');
	let hora = document.querySelector('#hora');
	let botonEnviar = document.querySelector('#crear');

	//Cuando damos al boton de enviar nos hace el fetch con los parametros
	botonEnviar.addEventListener('click', function (){
		let date;
		if (fecha.value !== '' || hora.value !== '') {
			date = new Date(fecha.value+'T'+hora.value+':00.000Z');
		}
		fetch('http://localhost:3000/tasks', {
			method: 'post',
			headers: {
				'Accept': 'application/json, text/plain, /',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				titulo: titulo.value,
				descripcion: descripcion.value,
				fecha_creacion: date,
				estado: estado.value
			})
		}).then(res => res.json())
			.then(res => console.log(res))
			.catch(error => {console.log(error.message);});
	});
});


