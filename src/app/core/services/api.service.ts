import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  post(url: string, data: any) {
    return this.http.post(this.apiUrl + '/api/' + url, data);
  }
  get(url: string) {
    return this.http.get(this.apiUrl + '/api/' + url);
  }
  formatErrorMessage(message: string) {
    return message.replace(/_/g, ' ');
  }
  put(url: string, data: any) {
    return this.http.put(this.apiUrl + '/api/' + url, data);
  }
  delete(url: string) {
    return this.http.delete(this.apiUrl + '/api/' + url);
  }
}
