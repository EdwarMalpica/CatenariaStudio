import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/core/services/api.service';
import { EngineService } from 'src/app/core/services/engine.service';
import { AppState } from 'src/app/data/app.state';
import { isLoading } from 'src/app/data/shared/shared.action';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
})
export class ViewProjectComponent implements OnInit {
  proyecto: any;
  img: any[] = [];
  id: string;
  modelPath = '';
  apiUrl = '';
  posts = [
    {
      id: '1',
      title: 'Sección de comentarios',
      url: 'http://localhost:4200/posts/1',
      content: 'Dejanos un comentario con tu opinión acerca de este proyecto :D',
    },
  ];
  @ViewChild('canvasModel') canvasModel: ElementRef<HTMLCanvasElement>;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private ngse: EngineService,
    private store:Store<AppState>
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.posts[0].id = params['id'];
      this.posts[0].url = 'http://localhost:4200/posts/' + params['id'];
      this.getProyecto(params['id']);
    });
    this.apiUrl = environment.apiUrl;
  }

  getProyecto(id: any) {
    this.store.dispatch(isLoading({ isLoading: true }));
    this.api.get('proyectos/' + id).subscribe((data: any) => {
      this.proyecto = data.publicacion;
      this.img = this.proyecto.files.filter((file: any) =>
        this.noContieneGLBorGLTF(file.formato)
      );
      this.modelPath = this.proyecto.files.filter((file: any) =>
        this.contieneGLBorGLTF(file.formato)
      )[0].path;
      this.store.dispatch(isLoading({ isLoading: false }));
    });
  }

  setScene() {
    this.ngse.createScene(this.canvasModel);
  }
  ngOnInit(): void {
    if (document.readyState === 'complete') {
      this.ngse.createScene(this.canvasModel);
    } else {
      document.addEventListener('DOMContentLoaded', (event) => {
        this.ngse.createScene(this.canvasModel);
      });
    }
  }

  cargarModelo() {
    return new URL(this.apiUrl + this.modelPath, import.meta.url);
  }

  contieneGLBorGLTF(cadena: string): boolean {
    return cadena.includes('glb') || cadena.includes('gltf');
  }

  noContieneGLBorGLTF(cadena: string): boolean {
    return !cadena.includes('glb') && !cadena.includes('gltf');
  }
}
