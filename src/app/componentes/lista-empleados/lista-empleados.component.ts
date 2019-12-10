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
    this.empleados.push(new Empleado(1,"Juan","López","Contabilidad")),
    this.empleados.push(new Empleado(2,"Ana","Ginés","Administración")),
    this.empleados.push(new Empleado(3,"Carlos","Sanz","Contabilidad")),
    this.empleados.push(new Empleado(4,"Marta","Simón","Administración")),
    this.empleados.push(new Empleado(5,"Miguel","Fernández","Dirección"))
  }

  ngOnInit() {
  }

}
