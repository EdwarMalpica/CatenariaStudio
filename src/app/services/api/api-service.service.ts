import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  isAuthenticated: boolean = false;
  constructor(private auth:AuthService) {
    this.getIsAuthenticated();
  }

  getIsAuthenticated(){
   return this.auth.isAuthenticated;
  }
}
