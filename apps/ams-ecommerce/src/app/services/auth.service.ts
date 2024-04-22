import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = JSON.parse(localStorage.getItem('user')!)
 
 checkAuth(){
  const user = JSON.parse(localStorage.getItem('user')!)
  return !user
 }

 setUserLocalStorage(user: any){
  localStorage.setItem('user', JSON.stringify(user))
 }

}
