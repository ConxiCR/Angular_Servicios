//modelo para representar la Array de personas. Clase para representar a la persona
export class Persona {
    //propiedades de la clase
    nombre: string;
    apellidos: string;
    edad: number;
    activo: boolean;

    //parametros
    constructor(pNombre: string, pApellidos: string, pEdad: number, pActivo: boolean){
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
        this.activo = pActivo;

    }

}