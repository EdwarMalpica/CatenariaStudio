import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { AppState } from 'src/app/data/app.state';
import { isLoadingButton } from 'src/app/data/shared/shared.action';
import { getIsLoadingButton } from 'src/app/data/shared/shared.selector';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
})
export class CitasComponent implements OnInit{
  mensajeCita: string = '';
  date_status_id: number = 1;
  date: Date[] | undefined;
  isLoadingButton:Observable<boolean>;

  constructor(
    private api: ApiService,
    private alerts: AlertsService,
    private store:Store<AppState>,
  ) {}
  ngOnInit(): void {
    this.isLoadingButton = this.store.select(getIsLoadingButton);
  }

  assignDate() {

    this.store.dispatch(isLoadingButton({isLoadingButton:true}));
    if (this.mensajeCita && this.date) {
      const data = {
        fecha_cita: this.date,
        mensaje: this.mensajeCita,
        estado_cita_id: this.date_status_id,
      };
      this.api.post('citas', data).subscribe({
        next: (data) => {
          this.mensajeCita = '';
          this.date = undefined;
          this.alerts.showSuccess('Cita asignada correctamente');
          this.store.dispatch(isLoadingButton({isLoadingButton:false}));
        },
        error: (error) => {
          this.alerts.showError(error.message);
          this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
        },
      });
    } else {
      this.alerts.showError('Complete los campos');
      this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
    }
  }

}
