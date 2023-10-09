import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { User } from "../../models/auth/user";
import { URL_ENDPOINT_HOST } from "../../utils/constants";
import { Store } from "@ngrx/store";

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    private store:Store<any>) {
      this.isAuthenticated = this.store.select(state => state.auth.isAuthenticated);
  }

  isAuthenticated: Observable<boolean> = new Observable<boolean>();
  user: User | null = null;
  token: string | null = null;

  login(data:any): Observable<string> {
    return this.http.post<string>(URL_ENDPOINT_HOST + 'auth/login',
      data);
  }

  register(user: User): Observable<string> {
    return this.http
      .post<string>(URL_ENDPOINT_HOST +'auth/register', {
        name: user.name,
        email: user.email,
        password: user.password,
        nombres: user.nombres,
        apellidos: user.apellidos,
        fecha_nacimiento: user.fecha_nacimiento,
        numero_telefonico: user.password,
      });
  }



  logout() {
  }
}
