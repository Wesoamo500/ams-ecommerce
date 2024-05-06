import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  openAddressModal = signal(false)
  addresses = new BehaviorSubject<any[]>([])
  authService = inject(AuthService)
  handleOpenAddressModal(){
    return this.openAddressModal.update((prev)=>!prev)
  }
  profile = new BehaviorSubject(!this.authService.checkAuth() ? this.authService.getItem('profileImage') :'../../assets/images/image-avatar.png')
}
