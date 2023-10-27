export class Date {
  date_date:string;
  message: string;
  date_status_id: number;

  constructor(fecha_cita: string, mensaje: string,
    estado_cita_id: number) { this.date_date = fecha_cita; this.message = mensaje; this.date_status_id=estado_cita_id }
}             
