import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  post(serviceName: string, data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;

    return this.http.post(url, JSON.stringify(data), options);
}
}
