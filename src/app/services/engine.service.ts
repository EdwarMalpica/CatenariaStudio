import * as THREE from 'three';

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
  private light: THREE.AmbientLight;

  private cube: THREE.Mesh;
  private model:THREE.Group;
  private frameId:number;

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
    this.camera.position.z = 5;
    this.scene.add(this.camera);
  
    this.light = new THREE.AmbientLight(0x404040);
    this.light.position.z= 10;
    this.scene.add(this.light);


    this.loader =  new GLTFLoader();

    this.loader.load('assets/model/modelGirl.glb',gltf=>  {
      this.model = gltf.scene;
      this.scene.add( this.model );
      this.renderer.render( this.scene, this.camera);
    
    }, undefined, function ( error ) {
    
      console.error( error );
    
    } );
    //const geometry = new THREE.BoxGeometry(2,2,2);
    //const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    //this.cube = new THREE.Mesh(geometry, material);
    //this.scene.add(this.cube);
  }

  public animate(){

    this.ngZone.runOutsideAngular( ()=>{
      if(document.readyState === 'complete'){
        this.renderModel();
      }else{
        window.addEventListener('DOMContentLoaded',()=>{
          this.renderModel();
        });
      }
    });
    
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
