import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/modelo/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleado:Empleado;
  ocultar:boolean = false;
  constructor(id,nombre,apellido,departamento) {
    //this.empleado = new Empleado(1, "Juan", "López", "Contabilidad");
    this.empleado = new Empleado(id,nombre,apellido,departamento);
   }

  ngOnInit() {
  }

  cambiarVisibilidad(){
    this.ocultar==true?this.ocultar=false:this.ocultar=true;
  }

}
