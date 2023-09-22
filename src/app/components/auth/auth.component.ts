import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { setToken } from './auth/auth.actions';
import { setToken } from 'src/auth.actions'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private store: Store) {}


  ngOnInit() {
       // Obtener el token del store
       let mivariable :any = 'auth'
       this.store.select(mivariable).subscribe((authState:any) => {
         const token = authState.token;
         console.log('Token de autenticación:', token);
       });

       // Establecer el token en el store
       this.store.dispatch(setToken({ token: 'mi_token' }));
     }
   }


