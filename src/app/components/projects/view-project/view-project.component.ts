import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api/api-service.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
})
export class ViewProjectComponent {
  /** Este arreglo es solo a modo de ejemplo para tener algo que cargar
  en la sección de comentarios y que se muestre disqus*/
  proyecto: any;
  img: any[] = [];
  id: string;
  constructor(private api: ApiServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.posts[0].id = params['id'];
      this.posts[0].url = 'http://localhost:4200/posts/' + params['id'];
      this.getProyecto(params['id']);
    });
    this.apiUrl = this.api.urlApi;
  }
  apiUrl = '';
  getProyecto(id: any) {
    this.api.get('/proyectos/' + id).subscribe((data: any) => {
      this.proyecto = data.publicacion;
      this.img = this.proyecto.files.filter((file: any) =>
        this.noContieneGLBorGLTF(file.formato)
      );
      console.log(this.img);
    });
  }

  noContieneGLBorGLTF(cadena: string): boolean {
    return !cadena.includes('glb') && !cadena.includes('gltf');
  }
  posts = [
    {
      id: '1',
      title: 'Sección de comentarios',
      url: 'http://localhost:4200/posts/1',
      content: 'Comentarios para Catenaria House',
    },
  ];
}
