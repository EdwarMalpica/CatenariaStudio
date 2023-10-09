import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient, private store: Store) { }
  // Ejemplo de función para hacer una solicitud autenticada
  getAuthenticatedData() {
    let miVar: any = 'auth';
    this.store.select(miVar).subscribe((authState:any) => {
      const token = authState.token;
      if (token) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        this.http.get('tu_endpoint_autenticado', { headers }).subscribe((data) => {
          console.log('Datos autenticados:', data);
        });
      }
    });
  }

}
