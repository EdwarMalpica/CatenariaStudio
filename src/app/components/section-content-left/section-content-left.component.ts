import { Component, Input, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

}
