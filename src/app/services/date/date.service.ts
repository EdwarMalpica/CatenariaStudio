import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Date } from "../../models/date/date";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DateService {
  constructor(private http: HttpClient) { }

  assignDate(date: Date): Observable<string> {
    return this.http
      .post<string>(
        'http://localhost:8000/api/citas',
        {
          fecha_cita: date.date_date,
          mensaje: date.message,
          estado_cita_id: date.date_status_id
        }
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
