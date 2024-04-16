import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  router = inject(Router)
  fb = inject(FormBuilder)
  constructor(private apiService: ApiService){}
  isLogin: boolean = true;
  authForm = this.fb.group({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    correctPassword: ''
  })
  displayError(){
    return this.authForm.value.password === this.authForm.value.correctPassword
  }
  currentUrl = this.router.url.split('/').pop();

  ngOnInit(): void {
    this.isLogin = this.router.url.split('/').pop() === 'register' ? false : true;
  }

  handleSwitch(){
    if(this.currentUrl === 'login') this.router.navigate(['/auth/register'])
    if(this.currentUrl === 'register') this.router.navigate(['/auth/login'])
  }
  getControl(name:string){
    return this.authForm.get(name) as FormControl
  }

  handleAuthentication(){
   if(this.isLogin){
    console.log('auth')
    this.apiService.login(this.authForm.value).subscribe(v=>console.log(v))
   }
   if(!this.isLogin && this.displayError()){
    this.apiService.register(this.authForm.value).subscribe(v=>console.log(v))
    this.authForm.setValue({
      firstName: '',
      lastName: '',
      email:'',
      password:'',
      correctPassword:''
    })
   }
   
  }
}
