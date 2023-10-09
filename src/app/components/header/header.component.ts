import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { selectIsAuthenticated } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private api: ApiServiceService, private store:Store) {}

  isAuthenticated$: boolean = false;
  ngOnInit(): void {
    this.isAuthenticated$ = localStorage.getItem('isAuthenticated') === 'true';
  }

  toLogin() {
    this.router.navigate(['/login']);
  }
  toResgistro() {
    this.router.navigate(['/registro-usuario']);
  }

}
