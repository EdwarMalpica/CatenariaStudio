import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-content-left',
  templateUrl: './section-content-left.component.html',
  styleUrls: ['./section-content-left.component.css']
})
export class SectionContentLeftComponent implements OnInit {

  @Input() titleContent: string;
  @Input() descriptionContent: string;
  @Input() linkContent: string;
  @Input() linkSource: string;

  listSources:string[];


  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToProyects(){
    this.router.navigate(['/projects'])
  }
}
