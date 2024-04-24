import { Component, inject, signal } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faClose } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../../services/shared.service';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-address-form',
    standalone: true,
    templateUrl: './address-form.component.html',
    styleUrl: './address-form.component.css',
    imports: [InputComponent, FontAwesomeModule, ReactiveFormsModule]
})
export class AddressFormComponent {
  fb = inject(FormBuilder)
  sharedServices = inject(SharedService)
  apiService = inject(ApiService)
  openAddressModal = this.sharedServices.openAddressModal();
  addIcon = faAdd
  closeIcon = faClose

  addressForm = this.fb.group({
    city: '',
    country: '',
    state: '',
    zipCode: ''
  })

  handleAddAddress(){
    this.apiService.addAddress(this.addressForm.value).subscribe(v=>console.log(v))
  }
  getAddressControl(name: string){
    return this.addressForm.get(name) as FormControl
  }

  handleOpenAddressModal(){
    this.sharedServices.handleOpenAddressModal();
  }
}
