import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  openAddressModal = signal(false)
  addresses = new BehaviorSubject<any[]>([])
  handleOpenAddressModal(){
    return this.openAddressModal.update((prev)=>!prev)
  }
}
