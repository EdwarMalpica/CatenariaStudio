import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  store: any;
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Aquí debes agregar tu lógica de autenticación
    // Por ejemplo, puedes verificar si el usuario está autenticado en tu Store de NgRx
    // Si el usuario está autenticado, retorna true, de lo contrario, redirige a la página de inicio de sesión y retorna false
    const isAuthenticated = this.store.select((state:any) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
      return false;
    }

    return true;
  }
}
