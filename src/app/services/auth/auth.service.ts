import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, tap, throwError } from "rxjs";
import { User } from "../../models/auth/user";
import { URL_ENDPOINT_HOST } from "../../utils/constants";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private store: Store<any>, private router: Router) {
    this.isAuthenticated = this.store.select(
      (state) => state.auth.isAuthenticated
    );
  }

  isAuthenticated: Observable<boolean> = new Observable<boolean>();
  user: User | null = null;
  token: string | null = null;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      this.isAuthenticatedSubject.next(JSON.parse(isAuthenticated));
    }
  }

  get isAuthenticated$() {
    return this.isAuthenticatedSubject.asObservable();
  }

  setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }

  login(data: any): Observable<string> {
    return this.http.post<string>(URL_ENDPOINT_HOST + 'auth/login', data);
  }

  register(user: User): Observable<string> {
    return this.http.post<string>(URL_ENDPOINT_HOST + 'auth/register', {
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
     localStorage.clear();
     this.setAuthenticated(false);
     this.router.navigate(['/login']);
  }
}
