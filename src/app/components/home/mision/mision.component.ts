import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from 'src/app/core/services/engine.service';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css'],
})
export class MisionComponent implements AfterViewInit {
  @ViewChild('casad') rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private engService: EngineService) {}
  ngAfterViewInit(): void {
    if (this.rendererCanvas?.nativeElement) {
      this.adjustCanvasSize();
    } else {
      // Si el elemento no está disponible, puedes esperar a que se cargue el DOM
      document.addEventListener('DOMContentLoaded', () => {
        if (this.rendererCanvas?.nativeElement) {
          this.adjustCanvasSize();
        }
      });
    }
  }

  private adjustCanvasSize() {
    this.rendererCanvas.nativeElement.style.width = '100%';
    this.engService.createScene(this.rendererCanvas, '');
    //this.engService.animate();
  }
}
