import { Component } from '@angular/core';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent {
  /** Este arreglo es solo a modo de ejemplo para tener algo que cargar
  en la sección de comentarios y que se muestre disqus*/
  posts = [
    {
      id: '1',
      title: 'Sección de comentarios',
      url: 'http://localhost:4200/posts/1',
      content: 'Comentarios para Catenaria House'
    }
  ];
}
