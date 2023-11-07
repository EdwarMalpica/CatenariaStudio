export class User {
  name: string
  email: string
  password: string
  nombres: string
  apellidos: string
  fecha_nacimiento: string
  numero_telefonico: string

  constructor(name: string, email: string, password: string, nombres: string,
    apellidos: string, fecha_nacimiento: string, numero_telefonico: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.fecha_nacimiento = fecha_nacimiento;
    this.numero_telefonico = numero_telefonico;

  }
}
