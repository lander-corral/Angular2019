export class Empleado {
    constructor(public id:number,
        public nombre:string,
        public apellido:string,
        public departamento,
        public sexo){
        
    }
    nombreCompleto(){
        return this.apellido + ", " + this.nombre;
    }
}
