import { Component } from '@angular/core';
import { Alumno } from '../models/alumno.interface';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {

  alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Xavier',
      apellido: 'Asturia',
      dni: 23456789,
      fechaIngreso: new Date(),
      aprobado: true,
    },{
      id: 2,
      nombre: 'Sabrina',
      apellido: 'Paso',
      dni: 56743123,
      fechaIngreso: new Date(),
      aprobado: true,
    },{
      id: 3,
      nombre: 'Raul',
      apellido: 'Portal',
      dni: 8765437,
      fechaIngreso: new Date(),
      aprobado: false,
    },{
      id: 4,
      nombre: 'Irma',
      apellido: 'Rodriguez',
      dni: 3495743,
      fechaIngreso: new Date(),
      aprobado: true,
    },{
      id: 5,
      nombre: 'Misael',
      apellido: 'Sarquis',
      dni: 54673205,
      fechaIngreso: new Date(),
      aprobado: false,
    },
  ]
}
