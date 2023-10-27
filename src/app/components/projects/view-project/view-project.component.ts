import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { EngineService } from 'src/app/services/engine.service';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
})
export class ViewProjectComponent implements OnInit {
  /** Este arreglo es solo a modo de ejemplo para tener algo que cargar
  en la sección de comentarios y que se muestre disqus*/
  proyecto: any;
  img: any[] = [];
  id: string;
  modelPath = '';
  @ViewChild('canvasModel') canvasModel: ElementRef<HTMLCanvasElement>;

  constructor(
    private api: ApiServiceService,
    private route: ActivatedRoute,
    private ngse: EngineService
  ) {
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
      this.modelPath = this.proyecto.files.filter((file: any) =>
        this.contieneGLBorGLTF(file.formato)
      )[0].path;
    });
  }

  setScene() {
    this.ngse.createScene(this.canvasModel);

  }
  ngOnInit(): void {
    if (document.readyState === 'complete') {
      // Aquí puedes escribir el código que quieres que se ejecute después de que el DOM se haya cargado
      this.ngse.createScene(this.canvasModel);
      //this.engService.animate();
    } else {
      document.addEventListener('DOMContentLoaded', (event) => {
        this.ngse.createScene(this.canvasModel);
        //this.engService.animate();
      });
    }
  }

  animate() {}

  cargarModelo() {
    return new URL(this.apiUrl + this.modelPath, import.meta.url);
  }

  contieneGLBorGLTF(cadena: string): boolean {
    return cadena.includes('glb') || cadena.includes('gltf');
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
