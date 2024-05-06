import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

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
  auth = inject(AuthService)
  toastr = inject(ToastrService)
  constructor(private apiService: ApiService){}
  isLogin: boolean = true;
  registerAuthSuccess$!:Object
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
    
    if(!this.auth.checkAuth()) this.router.navigate(['/'])
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
    this.apiService.login(this.authForm.value).subscribe({
      next:(v)=>{
        this.toastr.success('Login successful 😆','Login' )
        localStorage.setItem('user', JSON.stringify(v))
        this.router.navigate(['/'])
      },
      error: (err)=>{
        this.toastr.error(err.error.message,err.error.error)
      }
    })
    this.authForm.setValue({
      firstName: '',
      lastName: '',
      email:'',
      password:'',
      correctPassword:''
    })
   }
   if(!this.isLogin && this.displayError()){
    this.apiService.register(this.authForm.value).subscribe({next:()=>{
      this.toastr.success('Login', 'Login successful😆')
    }, error: ()=>{

    }})
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
