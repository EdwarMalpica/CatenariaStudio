import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/data/app.state';
import { logout } from 'src/app/data/auth/auth.action';
import { isAuthenticated } from 'src/app/data/auth/auth.selector';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private store: Store<AppState>) {}

  isAuthenticated: Observable<boolean>;

  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
  }

  closeSession() {
    this.store.dispatch(logout());
  }
  goProjects() {
    this.router.navigate(['/projects']);
  }
}
