import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyects-title',
  templateUrl: './proyects-title.component.html',
  styleUrls: ['./proyects-title.component.css']
})
export class ProyectsTitleComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToProyects(){
    this.router.navigate(['/projects'])
  }
}
