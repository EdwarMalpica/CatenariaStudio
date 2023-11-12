import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-container-box',
  templateUrl: './project-container-box.component.html',
  styleUrls: ['./project-container-box.component.css'],
})
export class ProjectContainerBoxComponent {
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
  @Input() proyecto: any;
  @Input() isLeftVisible: boolean;
  apiUrl: string = environment.apiUrl;
  constructor(private router: Router, private elementRef:ElementRef) {}

  goToProject() {
    this.router.navigate(['/projects/', this.proyecto.id]);
  }
}

