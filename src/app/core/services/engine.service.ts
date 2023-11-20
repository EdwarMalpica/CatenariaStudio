import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class EngineService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.SpotLight;
  private reader = new FileReader();
  private cube: THREE.Mesh;
  private model: THREE.Object3D;
  private frameId: number;
  private orbit: OrbitControls;
  private loader: GLTFLoader;

  constructor(private ngZone: NgZone, private http: HttpClient) {}

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public createSceneStatic(canvas: ElementRef<HTMLCanvasElement>) {
   this.canvas = canvas.nativeElement;
   this.renderer = new THREE.WebGLRenderer({
     canvas: this.canvas,
     alpha: true,
     antialias: true,
   });
   this.renderer.setSize(
     canvas.nativeElement.width,
     canvas.nativeElement.height
   );
   //Scena
   this.scene = new THREE.Scene();
   this.camera = new THREE.PerspectiveCamera(
     75,
     canvas.nativeElement.width / canvas.nativeElement.height,
     0.1,
     1000
   );
   this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
   this.orbit.update();
   //Agregar el axesHelper a la escena
   this.camera.position.z = 5;
   this.scene.add(this.camera);

   this.light = new THREE.SpotLight();
   this.light.position.set(-50, 50, 0);
   this.light.decay = 0;
   //Agregar sombras
   this.light.castShadow = true;
   //Reducir angulo para mejorar sombras
   this.light.angle = 0.4;
   this.light.penumbra = 0;
   this.light.intensity = 2;
   this.scene.add(this.light);

   this.camera.position.set(0, 10, 30);
   this.loader = new GLTFLoader();
       this.loader.load(
         './assets/model/Hotel(3star).glb',
         (gltf: any) => {
           this.model = gltf.scene;
           this.scene.add(this.model);
           this.renderer.render(this.scene, this.camera);
           this.loop();
         },
         function (error: any) {
           console.error(error);
         }
       );
  }
  apiUrl = environment.apiUrl;
  public createScene(canvas: ElementRef<HTMLCanvasElement>, path: string) {
    this.http
      .post(
        this.apiUrl+'/api/archivos/download',
        {
          file: path,
        },
        { responseType: 'blob' }
      )
      .subscribe({
        next: (data: any) => {
          this.canvas = canvas.nativeElement;
          this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true,
          });
          this.renderer.setSize(
            canvas.nativeElement.width,
            canvas.nativeElement.height
          );
          //Scena
          this.scene = new THREE.Scene();
          this.camera = new THREE.PerspectiveCamera(
            75,
            canvas.nativeElement.width / canvas.nativeElement.height,
            0.1,
            1000
          );
          this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
          this.orbit.update();
          //Agregar el axesHelper a la escena
          this.camera.position.z = 5;
          this.scene.add(this.camera);

          this.light = new THREE.SpotLight();
          this.light.position.set(-10, 10, 10);
          this.light.decay = 0;
          //Agregar sombras
          this.light.castShadow = true;
          //Reducir angulo para mejorar sombras
          this.light.angle = 0.4;
          this.light.penumbra = 0;
          this.light.intensity = 2;
          this.scene.add(this.light);
          const light2 = new THREE.SpotLight(0xffffff, 0.5);
          light2.position.set(10, 10, 20);
          this.scene.add(light2);

          this.camera.position.set(0, 1, 20);
          this.loader = new GLTFLoader();
          this.model = new THREE.Object3D();
          this.reader.readAsArrayBuffer(data);
          this.reader.onload = () => {
            if (this.reader.result !== null) {
              this.loader.parse(
                this.reader.result as ArrayBuffer,
                '',
                (gltf: any) => {
                  this.model = gltf.scene;
                  this.scene.add(this.model);
                  this.renderer.render(this.scene, this.camera);
                  this.loop();
                },
                function (error: any) {
                  console.error(error);
                }
              );
            }
          };
        },
      });
  }

  loop() {
    this.renderer.setAnimationLoop(() => {
      this.model.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    });
  }

  animate(time: number) {
    this.renderer.render(this.scene, this.camera);
  }

  public render() {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  public renderModel() {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    this.model.rotation.x += 0.01;
    this.model.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
