import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { AppState } from 'src/app/data/app.state';
import { isLoading } from 'src/app/data/shared/shared.action';
import { getIsLoading } from 'src/app/data/shared/shared.selector';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  articulos: any[] = [];
  isLeftVisible: boolean = true;
  isLoading:Observable<boolean>;
  constructor(private api: ApiService, private store: Store<AppState>, private router: Router,
    private alerts:AlertsService) {
    this.store.dispatch(isLoading({ isLoading: true }));
  }
  ngOnInit(): void {
    this.isLoading =this.store.select(getIsLoading);
    this.getProjects();

  }

  getLeftVisible() {
    this.isLeftVisible = !this.isLeftVisible;
    return this.isLeftVisible;
  }
  getProjects() {
    this.api.get('articulos').subscribe({
      next: (data: any) => {
        this.articulos = data.articulos;
        setTimeout(() => {
        this.store.dispatch(isLoading({ isLoading: false }));
        },2000);
      },
      error: (error) => {
        this.store.dispatch(isLoading({ isLoading: false }));
        this.alerts.showError(error);
      },
    });
    }

}
