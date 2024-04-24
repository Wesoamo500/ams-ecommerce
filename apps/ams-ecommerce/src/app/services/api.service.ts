import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  authService = inject(AuthService)
  constructor(private http: HttpClient){}
  API_URL = 'http://localhost:3000/api'

  register(data: any){
    return this.http.post(`${this.API_URL}/user/register`, data)
  }
  login(data: any){
    return this.http.post(`${this.API_URL}/auth/login`, data)
  }
  fetchProfileData() {
    return this.http.get(`${this.API_URL}/user/${this.authService.user.userData.id}`)
  }

  updateProfile(data: any){
    return this.http.patch(`${this.API_URL}/user/${this.authService.user.userData.id}`, {...data})
  }

  addAddress(data: any){
    return this.http.post(`${this.API_URL}/user/addAddress`, {...data}, {headers: {'Authorization':`Bearer ${this.authService.user.accessToken}`}})
  }
}
