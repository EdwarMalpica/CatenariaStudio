import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-content-right',
  templateUrl: './section-content-right.component.html',
  styleUrls: ['./section-content-right.component.css']
})
export class SectionContentRightComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToProyects(){
    this.router.navigate(['/projects'])
  }

}
