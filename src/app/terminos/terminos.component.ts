import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.css']
})
export class TerminosComponent {
  aceptarTerminos: boolean = false;

  constructor(private router: Router) {}

  continuar() {
    if (this.aceptarTerminos) {
      // Redirige al usuario a la siguiente vista
      this.router.navigate(['/registrar-usuario']); // Cambia 'terminos' por la ruta de tu siguiente vista 'registrar-usuario'
    } else {
      console.log('Por favor, acepta los términos y condiciones para continuar.');
    }
  }

}
