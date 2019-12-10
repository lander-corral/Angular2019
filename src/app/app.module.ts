import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ListaEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
