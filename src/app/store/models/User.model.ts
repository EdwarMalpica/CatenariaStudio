export interface User {
  id: number;
  name: string;
  email: string;
  detalle:{
    nombres: string;
    apellidos: string;
    fechaNacimiento: string;
    telefono: string;
  }
}
