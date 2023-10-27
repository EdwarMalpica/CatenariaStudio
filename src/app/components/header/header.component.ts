import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private api: ApiServiceService, private store:Store, private auth:AuthService) {}

  isAuthenticated: boolean = false;

  ngOnInit(): void {
      this.auth.isAuthenticated$.subscribe((data) => {
      this.isAuthenticated = data;
         console.log(this.isAuthenticated);
      });
  }


  closeSession() {
    this.auth.logout();
  }


}
