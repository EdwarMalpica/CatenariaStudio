import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent {
  proyectos: any[] = [];
  constructor(private api: ApiService) {
    this.getProjects();
  }

  getProjects() {
    this.api.get('/proyectos').subscribe(
      (data: any) => {
        this.proyectos = data.proyectos;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
