import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Credential } from "../../models/auth/credential";
import { User } from "../../models/auth/user";
import { URL_ENDPOINT_HOST_AUTH } from "../../utils/constants";

@Injectable({ providedIn: 'root' })
export class AuthService {  
  constructor(private http: HttpClient) { }

  login(credential: Credential): Observable<string> {
    return this.http.post<string>(URL_ENDPOINT_HOST_AUTH + 'login',
      JSON.stringify(credential)).pipe(tap(response => console.log(response)),
        catchError(this.handleError));
  }

  register(user: User): Observable<string> {
    return this.http.post<string>(URL_ENDPOINT_HOST_AUTH + 'register',
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
