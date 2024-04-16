import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient){}
  API_URL = 'http://localhost:3000/api'

  register(data: any){
    return this.http.post(`${this.API_URL}/user/register`, data)
  }
  login(data: any){
    return this.http.post(`${this.API_URL}/auth/login`, data)
  }
}
