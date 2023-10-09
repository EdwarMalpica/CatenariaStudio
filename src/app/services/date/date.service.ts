import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Date } from "../../models/date/date";
import { Injectable } from "@angular/core";
import { DateResponse } from "../../models/date/dateResponse";
import { Cita } from "../../models/date/cita";

@Injectable({ providedIn: 'root' })
export class DateService {
  constructor(private http: HttpClient) { }

  assignDate(date: Date): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
    });
    return this.http
      .post<string>(
        'http://localhost:8000/api/citas',
        {
          fecha_cita: date.date_date,
          mensaje: date.message,
          estado_cita_id: date.date_status_id
        },
        { headers }
      )
      .pipe(
        tap((response) => console.log(response)),
        catchError(this.handleError)
      );
  }

  fetchAllDates(): Observable<DateResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
    });
    return this.http
      .get<DateResponse>(
        'http://localhost:8000/api/citas/user',
        { headers }
      )
      .pipe(
        tap((response) => console.log(response)),
        catchError(this.handleError)
      );
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  updateDate(date: Cita) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
    });
    return this.http
      .post<string>(
        'http://localhost:8000/api/citas/update',
        {
          id: date.id,
          fecha_cita: date.fecha_cita,
          mensaje: date.mensaje,
          estado_cita_id: date.estado_cita_id
        },
        { headers }
      )
      .pipe(
        tap((response) => console.log(response)),
        catchError(this.handleError)
      );
  }

  deleteDate(id: number) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
    });
    return this.http
      .delete<string>(
        'http://localhost:8000/api/citas/' + id,
        { headers }
      )
      .pipe(
        tap((response) => console.log(response)),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrio un error: ', error)
    }
    return throwError(error)
  }
}
