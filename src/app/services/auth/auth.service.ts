import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Credential } from "../../models/auth/credential";
import { User } from "../../models/auth/user";

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credential: Credential): Observable<string> {
    return this.http.post<string>('http://localhost:8000/api/auth/login',
      JSON.stringify(credential)).pipe(tap(response => console.log(response)),
        catchError(this.handleError));
  }

  register(user: User): Observable<string> {
    return this.http.post<string>('http://localhost:8000/api/auth/register',
      JSON.stringify(user)).pipe(tap(response => console.log(response)),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrio un error: ', error)
    }
    return throwError(error)
  }
}
