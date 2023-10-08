import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateService } from '../../../services/date/date.service';
import { Date } from '../../../models/date/date';

@Component({
  selector: 'app-assign-date',
  templateUrl: './assign-date.component.html',
  styleUrls: ['./assign-date.component.css']
})
export class AssignDateComponent {
  date_date: string = '';
  message: string = '';
  date_status_id: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private dateService: DateService) {

  }

  assignDate() {
    if (this.date_date && this.message) {
      this.dateService.assignDate(new Date(this.date_date, this.message, this.date_status_id)).subscribe((dataResponse: any) => {
        console.log(dataResponse);
        alert('La cita se ha registrado correctamente');
        this.router.navigate(['/edit']);
      },
        (error: any) => {
          console.log(error);
          alert('Algo salio mal');
        }
      );
    } else {
      alert('Complete los campos');
    }
  }
}
