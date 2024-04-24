import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  openAddressModal = signal(false)
  handleOpenAddressModal(){
    return this.openAddressModal.update((prev)=>!prev)
  }
}
