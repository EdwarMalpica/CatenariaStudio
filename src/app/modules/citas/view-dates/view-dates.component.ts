import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { AppState } from 'src/app/data/app.state';
import { isLoadingButton } from 'src/app/data/shared/shared.action';
import { getIsLoadingButton } from 'src/app/data/shared/shared.selector';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-view-dates',
  templateUrl: './view-dates.component.html',
  styleUrls: ['./view-dates.component.css'],
})
export class ViewDatesComponent implements OnInit {
  citas: any[] = [];
  isLoadingButton: Observable<boolean>;
  visible: boolean = false;
  selectedCita: any;
  constructor(
    private api: ApiService,
    private alerts: AlertsService,
    private store: Store<AppState>
  ) {}

  showDialog(cita: any) {
    this.selectedCita = cita;
    this.visible = true;
  }

  cancelarCita() {
    this.visible = false;
    this.store.dispatch(isLoadingButton({ isLoadingButton: true }));
    this.api
      .delete(`citas/${this.selectedCita.id}`)
      .subscribe({
        next: (data) => {
          this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
          this.selectedCita = undefined;
          this.alerts.showSuccess('Cita cancelada correctamente');
          this.ngOnInit();
        },
        error: (error) => {
          this.alerts.showError(error.message);
          this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
        },
      });
  }

  ngOnInit(): void {
    this.isLoadingButton = this.store.select(getIsLoadingButton);
    this.store.dispatch(isLoadingButton({ isLoadingButton: true }));
    this.api.get('citas/user').subscribe({
      next: (data: any) => {
        this.citas = data.citas;
        this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
      },
      error: (error) => {
        this.alerts.showError(error.message);
        this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
      },
    });
  }
}
