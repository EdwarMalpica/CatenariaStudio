import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api/api-service.service';

@Component({
  selector: 'app-project-catalog',
  templateUrl: './project-catalog.component.html',
  styleUrls: ['./project-catalog.component.css']
})
export class ProjectCatalogComponent {

  proyectos:any[] = [];
  constructor(private api:ApiServiceService) {
    this.getProjects();
  }

  getProjects(){
    this.api.get('/proyectos').subscribe((data:any)=>{
      this.proyectos = data.proyectos;
    },(error)=>{
      console.log(error);
    })
  }
}

