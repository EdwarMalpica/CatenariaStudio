import { Observable } from "rxjs";
import { HorariosResponse } from "../models/dtos/horarios-response.interface";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class HorariosService {

  private api: string = 'http://127.0.0.1:8000/api/horarios';

  constructor(private http: HttpClient) {

  }

  public getSchedule(): Observable<HorariosResponse>{
    return this.http.get<HorariosResponse>(this.api);
  }
}
