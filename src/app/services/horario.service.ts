import { Observable } from "rxjs";
import { HorariosResponse } from "../models/dtos/horarios-response.interface";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HorariosService {

  constructor(private http: HttpClient) {

  }

  public getSchedule(): Observable<HorariosResponse>{
    return this.http.get<HorariosResponse>('http://127.0.0.1:8000/api/horarios');
  }
}
