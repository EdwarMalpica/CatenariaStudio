import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-project-catalog',
  templateUrl: './project-catalog.component.html',
  styleUrls: ['./project-catalog.component.css']
})
export class ProjectCatalogComponent {

  proyectos:any[] = [];
  constructor(private api:ApiService) {
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

