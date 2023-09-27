import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  // store: any;
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.checkAuthentication().pipe(
      map((authenticated) => {
        if (!authenticated) {
          this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
          return false;
        }
        return true;
      })
    );
  }
}
