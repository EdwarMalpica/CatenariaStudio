import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { URL_ENDPOINT_HOST } from 'src/app/utils/constants';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  urlApi:string = URL_ENDPOINT_HOST;
  isAuthenticated: boolean = false;
  constructor(private auth:AuthService, private http:HttpClient) {
    this.getIsAuthenticated();
  }

  getIsAuthenticated(){
   return this.auth.isAuthenticated;
  }

  get(url:string){
    return this.http.get(this.urlApi+"/api"+ url);
  }
  post(url:string,data:any){
    return this.http.post(this.urlApi + '/api' + url, data);
  }
  put(url:string,data:any){
    return this.http.put(this.urlApi + '/api' + url, data);
  }
  delete(url:string){
    return this.http.delete(this.urlApi + '/api' + url);
  }


}
