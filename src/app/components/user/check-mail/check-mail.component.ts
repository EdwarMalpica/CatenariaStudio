import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'app-check-mail',
  templateUrl: './check-mail.component.html',
  styleUrls: ['./check-mail.component.css']
})
export class CheckMailComponent implements OnInit{
  id?: string|null;
  hash: string|null;


  constructor( private route: ActivatedRoute, private api:ApiService) {}

  ngOnInit(): void {
    this.id = ""+this.route.snapshot.queryParamMap.get('id');
    this.hash = this.route.snapshot.queryParamMap.get('hash');
    try {
      this.api
        .get('email/verify/' + this.id + '/' + this.hash)
        .subscribe((report) => {
          let data = report;
          console.log(data);
        });
    } catch (error) {

    }
  }
}
