import { Component, Input } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api/api-service.service';

@Component({
  selector: 'app-project-container-box',
  templateUrl: './project-container-box.component.html',
  styleUrls: ['./project-container-box.component.css']
})
export class ProjectContainerBoxComponent {

  urlImg:string;
  @Input()proyecto:any;
  apiUrl:string = this.api.urlApi;
  constructor(private api:ApiServiceService) {
  }

}

