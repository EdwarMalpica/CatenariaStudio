import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManagerService } from 'src/app/data_manage/data_manager';


@Component({
  selector: 'app-check-mail',
  templateUrl: './check-mail.component.html',
  styleUrls: ['./check-mail.component.css']
})
export class CheckMailComponent implements OnInit{
  id?: string|null;
  hash: string|null;


  constructor(private dataManagerService: DataManagerService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = ""+this.route.snapshot.queryParamMap.get('id');
    this.hash = this.route.snapshot.queryParamMap.get('hash');
    try {
      this.dataManagerService
        .get_verify_email("email/verify/" + this.id + "/" + this.hash)
        .subscribe((report) => {
          let data = report;
          console.log(data)
        });      
    } catch (error) {
      
    }
  }
}
