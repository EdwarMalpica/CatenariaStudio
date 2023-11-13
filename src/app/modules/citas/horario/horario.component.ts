import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/core/services/api.service';
import { AppState } from 'src/app/data/app.state';
import { isLoading } from 'src/app/data/shared/shared.action';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css'],
})
export class HorarioComponent implements OnInit {
  horarios: any[] = [];
  constructor(
    private api: ApiService,
    private alerts: AlertsService,
    private store: Store<AppState>
  ) {}
  
  ngOnInit(): void {
    this.store.dispatch(isLoading({ isLoading: true }));
    this.api.get('horarios').subscribe({
      next: (data: any) => {
        this.horarios = data.horarios;
        this.store.dispatch(isLoading({ isLoading: false }));
      },
      error: (error) => {
        this.alerts.showError(error.message);
        this.store.dispatch(isLoading({ isLoading: false }));
      },
    });
  }

  formatTo12Hour(time24: string): string {
    const timeSplit = time24.split(':');
    let hours = parseInt(timeSplit[0], 10);
    const minutes = timeSplit[1];
    let period = 'AM';
    if (hours >= 12) {
      period = 'PM';
    }
    if (hours === 0) {
      hours = 12;
    } else if (hours > 12) {
      hours -= 12;
    }
    return `${hours}:${minutes}${period}`;
  }
}
