import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './data/app.state';
import { autoLogin } from './data/auth/auth.action';
import { AlertsService } from './shared/services/alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CatenariaStudio';

  constructor(private store:Store<AppState>, private alerts:AlertsService) {}

  ngOnInit(): void {
    this.store.dispatch(autoLogin());
  }
}
