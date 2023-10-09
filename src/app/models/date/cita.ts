import { Estado } from "./estado"

export class Cita {
  id: number
  fecha_cita: string
  mensaje: string
  user_id: number
  created_at: string
  updated_at: string
  deleted_at: any
  estado_cita_id: number
  estado: Estado
}
