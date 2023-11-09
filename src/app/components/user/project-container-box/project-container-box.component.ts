import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-container-box',
  templateUrl: './project-container-box.component.html',
  styleUrls: ['./project-container-box.component.css']
})
export class ProjectContainerBoxComponent {

  urlImg:string;
  @Input()proyecto:any;
  apiUrl:string = environment.apiUrl;
  constructor( private router:Router) {
  }

  goToProject(){
    this.router.navigate(['/view-project/', this.proyecto.id]);
  }
}

