import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
@Injectable({
  providedIn: 'root'
})
export class EngineService implements OnDestroy {
  private canvas:HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.SpotLight;

  private cube: THREE.Mesh;
  private model:THREE.Object3D;
  private frameId:number;
  private orbit:OrbitControls;
  private loader:GLTFLoader;

  constructor(private ngZone:NgZone) { }

  public ngOnDestroy():void {
    if(this.frameId!=null){
      cancelAnimationFrame(this.frameId);
    }
  }



  public createScene(canvas:ElementRef<HTMLCanvasElement>){

    this.canvas = canvas.nativeElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha:true,
      antialias: true
    });
    this.renderer.setSize(canvas.nativeElement.width, canvas.nativeElement.height);
    //Scena
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, canvas.nativeElement.width/canvas.nativeElement.height, 0.1, 1000
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

    this.camera.position.set(0, 1, 2);
    this.loader =  new GLTFLoader();

    this.loader.load('assets/model/modelGirl.glb',(gltf:any)=>  {
      this.model = gltf.scene;
      this.scene.add( this.model );
      this.renderer.render( this.scene, this.camera);
      this.loop();
    }, undefined, function ( error:any ) {

      console.error( error );

    } );
    //const geometry = new THREE.BoxGeometry(2,2,2);
    //const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    //this.cube = new THREE.Mesh(geometry, material);
    //this.scene.add(this.cube);
  }
  loop(){
  this.renderer.setAnimationLoop(()=>{
    this.renderer.render(this.scene, this.camera);
  } );
  }

  animate(time:number){
    // this.ngZone.runOutsideAngular( ()=>{
    //   if(document.readyState === 'complete'){
    //     this.renderModel();
    //   }else{
    //     window.addEventListener('DOMContentLoaded',()=>{
    //       this.renderModel();
    //     });
    //   }
    // });
    this.renderer.render(this.scene, this.camera);
  }

  public render(){
      this.frameId = requestAnimationFrame(()=>{
        this.render();
      });
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render( this.scene, this.camera);
  }

  public renderModel(){
    this.frameId = requestAnimationFrame(()=>{
      this.render();
    });
    this.model.rotation.x += 0.01;
    this.model.rotation.y += 0.01;
    this.renderer.render( this.scene, this.camera);
  }


}
