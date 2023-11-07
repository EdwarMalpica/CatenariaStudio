import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from 'src/app/services/engine.service';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css']
})
export class MisionComponent implements OnInit {

  @ViewChild('casad') rendererCanvas:ElementRef<HTMLCanvasElement>;

  constructor(private engService:EngineService) { }

  ngOnInit(): void {

    if (document.readyState === "complete") {
      // Aquí puedes escribir el código que quieres que se ejecute después de que el DOM se haya cargado
      this.rendererCanvas.nativeElement.style.width = "100%";
      this.engService.createScene(this.rendererCanvas);
      //this.engService.animate();
    } else {
      document.addEventListener("DOMContentLoaded", event=> {
        this.rendererCanvas.nativeElement.style.width = "100%";
        this.engService.createScene(this.rendererCanvas);
        //this.engService.animate();
      });
    }

    }



}
