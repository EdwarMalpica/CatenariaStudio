import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';



const apiUrl = "http://localhost:8000/api/"

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http: HttpClient) {}

  public get_verify_email(search_ep: string, params: HttpParams = new HttpParams()): Observable<any> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    const options = { params, headers };
    return this.http.get<any>(apiUrl + search_ep, options);
  }





}
