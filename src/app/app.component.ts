import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './data/app.state';
import { autoLogin } from './data/auth/auth.action';
import { AlertsService } from './shared/services/alerts.service';
import { Observable } from 'rxjs';
import { getIsLoading } from './data/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CatenariaStudio';
  isloading:Observable<boolean>;
  constructor(private store:Store<AppState>, private alerts:AlertsService) {}


  ngOnInit(): void {
    this.store.dispatch(autoLogin());
    this.isloading = this.store.select(getIsLoading);
  }
}
