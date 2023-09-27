import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private authTokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  // Método para almacenar el token en localStorage (no cookies, Edward - preguntar con cual)
  private setAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  // Método para obtener el token desde localStorage
  private getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  checkAuthentication(): Observable<boolean> {
    // Solicitud HTTP al backend para verificar la autenticación y obtén un valor booleano en la respuesta (llamada a un endpoint que verifica si el usuario tiene una sesión válida)
    // Aquí devuelvo Observable<boolean> --> emite true si el usuario está autenticado y false si no lo está.
    return this.http.get<boolean>('/api/check-auth'); // Supongamos que este endpoint verifica la autenticación.
  }

  login(username: string, password: string): Observable<string> {
    // Realizar una solicitud HTTP al backend para autenticar al usuario
    // obtener el token de respuesta.
    // devolver el token como un Observable.
    return this.http.post<string>('/api/login', { username, password });
    // El tipo <string> especifica el tipo de datos que el Observable emitirá.
    // Manejar errores y de almacenar el token en el almacenamiento seguro del cliente.
  }

  logout(): Observable<any> {
    // Edward, preguntar --> Realizar una solicitud HTTP al backend para cerrar la sesión del usuario y eliminar las cookies.
    return this.http.post<any>('/api/logout', {});
  }

  // Implementar métodos para el manejo de tokens, como refresco de tokens y revocación de tokens, según sea necesario.

  //Para Refrescar tokens
  refreshToken(): Observable<string> {
    //Edward, preguntar --> Realizo una solicitud HTTP al backend para obtener un nuevo token de actualización?
    return this.http.post<string>('/api/refresh-token', {});
  }

  revokeToken(): Observable<any> {
    // Realizar una solicitud HTTP al backend para revocar el token actual.
    return this.http.post<any>('/api/revoke-token', {});
  }

}
