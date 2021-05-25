'use strict';

module.exports = {Tarea};

//Clase Tarea
class Tarea {
	constructor(objTarea) {
		this.id = objTarea.id;
		this.titulo = objTarea.titulo;
		this.descripcion = objTarea.descripcion;
		this.fecha_creacion = objTarea.fecha_creacion;
		this.estado = objTarea.estado;
	}
//Metodo toDiv que nos pinta una tarea
	toDiv(contenedor) {
		let spanEstados = '';
		if (this.estado[0] === 'pendiente') {
			spanEstados = 'badge badge-danger';
		}
		if (this.estado[0] === 'haciendo') {
			spanEstados = 'badge badge-warning';
		}
		if (this.estado[0] === 'completada') {
			spanEstados = 'badge badge-success';
		}
		contenedor.innerHTML +=
            `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.titulo}</h5>
                <p class="card-text">${this.descripcion}</p>
            </div>
            <div class="card-footer">
                <p class="card-text"><span class="${spanEstados}" id="estado">${this.estado}</span> <span id="fecha"> ${this.fecha_creacion}</span></p>
            </div>
            </div>`;
	}


}