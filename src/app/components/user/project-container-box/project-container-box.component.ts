import { Component } from '@angular/core';

@Component({
  selector: 'app-project-container-box',
  templateUrl: './project-container-box.component.html',
  styleUrls: ['./project-container-box.component.css']
})
export class ProjectContainerBoxComponent {

  project = new Project("Casa Refugio Familiar Cerinza","Este proyecto es una construccion de obra civil ubicada en el municipal de Cerinza-Boyaca,  en donde los clientes nos entregaron los diseños previos.Este es un edificio de uso mixto, Residencial y Comercial." , "./assets/project.png")

}




export class Project{
  name:string
  description:string
  img_url:string

  constructor(name:string,description:string,img_url:string){
    this.name = name
    this.description = description
    this.img_url = img_url
  }
}