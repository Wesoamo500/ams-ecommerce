import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user = JSON.parse(localStorage.getItem('user')!)
 checkAuth(){
  return !this.user
 }
}
