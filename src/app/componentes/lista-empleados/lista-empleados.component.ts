import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/modelo/empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  empleados = [];
  constructor() {
    this.empleados.push(new Empleado(1,"Juan","López","Contabilidad"));
    this.empleados.push(new Empleado(2,"Marcos","Baena","Administración"));
    this.empleados.push(new Empleado(3,"Andrés","Alguacil","Contabilidad"));
    this.empleados.push(new Empleado(4,"María","Dolores","Administración"));
    this.empleados.push(new Empleado(5,"Guillermo","Vallés","Dirección"));
   }

  ngOnInit() {
  }

}
