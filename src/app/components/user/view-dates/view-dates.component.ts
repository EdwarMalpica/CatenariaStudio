import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateService } from '../../../services/date/date.service';
import { DateResponse } from '../../../models/date/dateResponse';
import { Cita } from '../../../models/date/cita';

@Component({
  selector: 'app-view-dates',
  templateUrl: './view-dates.component.html',
  styleUrls: ['./view-dates.component.css']
})
export class ViewDatesComponent implements OnInit {
  citas: Cita[] = [];
  editedDate: Cita = new Cita();
  isEditModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;
  deleteDateId: number = 0;

  ngOnInit(): void {
    this.fetchAllDates();
  }

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private dateService: DateService) {

  }

  fetchAllDates() {
    this.dateService.fetchAllDates().subscribe((dataResponse: DateResponse) => {
      if (dataResponse.citas) {
        this.citas = dataResponse.citas;
      }
    },
      (error: any) => {
        console.log(error);
        alert('Credenciales incorrectas');
      }
    );
  }

  openEditModal(cita: Cita) {
    this.isEditModalOpen = true;
    this.editedDate = cita;
  }

  saveDateChanges() {
    this.isEditModalOpen = false;
    this.dateService.updateDate(this.editedDate).subscribe((dataResponse: any) => {
      if (dataResponse.citas) {
        this.citas = dataResponse.citas;
      }
    },
      (error: any) => {
        console.log(error);
        alert('Credenciales incorrectas');
      }
    );
  }

  closeEditModal() {
    this.isEditModalOpen = false;
  }

  onDelete(id: number) {
    this.isDeleteModalOpen = true;
    this.deleteDateId = id;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
  }

  deleteDate() {
    this.isDeleteModalOpen = false;
    this.dateService.deleteDate(this.deleteDateId).subscribe((dataResponse: any) => {
      if (dataResponse.citas) {
        this.citas = dataResponse.citas;
        window.location.reload();
      }
    },
      (error: any) => {
        console.log(error);
        alert('Credenciales incorrectas');
      }
    );
  }
}
