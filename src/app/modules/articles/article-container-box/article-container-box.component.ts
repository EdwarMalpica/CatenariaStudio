import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-container-box',
  templateUrl: './article-container-box.component.html',
  styleUrls: ['./article-container-box.component.css'],
})
export class ArticleContainerBoxComponent {
  displayComponent = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elementPosition =
      this.elementRef.nativeElement.getBoundingClientRect();
    const elementTopPosition = elementPosition.top;
    if (elementTopPosition < -50) {
      this.displayComponent = true;
    } else {
      this.displayComponent = false;
    }
  }

  urlImg: string;
  @Input() articulo: any;
  @Input() isLeftVisible: boolean;
  apiUrl: string = environment.apiUrl;
  constructor(private router: Router, private elementRef: ElementRef) {}

  goToProject() {
    this.router.navigate(['/articulos/', this.articulo.id]);
  }
  goCitas() {
    this.router.navigate(['/citas']);
  }
}
