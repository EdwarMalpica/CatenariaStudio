import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Verifica el estado de autenticación utilizando el selector
    // return this.store.select(selectIsAuthenticated).pipe(
    //   map((isAuthenticated:boolean) => {
    //     if (isAuthenticated) {
    //       // El usuario está autenticado, permite el acceso a la ruta
    //       return true;
    //     } else {
    //       // El usuario no está autenticado, redirige a la página de inicio de sesión
    //       this.router.navigate(['/login']);
    //       return false;
    //     }
    //   })
    // );
    return localStorage.getItem('isAuthenticated') === 'true'
  }
}
