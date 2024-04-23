import { Injectable } from '@angular/core';


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
 getItem(key: string){
  return this.user.userData[key]
 }
}
