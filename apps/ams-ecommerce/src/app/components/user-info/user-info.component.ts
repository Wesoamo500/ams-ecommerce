import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faClose, faEdit,  faLocationDot, faPen } from '@fortawesome/free-solid-svg-icons';
import { OrdersComponent } from "../orders/orders.component";
import { InputComponent } from "../input/input.component";
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'app-user-info',
    standalone: true,
    templateUrl: './user-info.component.html',
    styleUrl: './user-info.component.css',
    imports: [FontAwesomeModule, OrdersComponent, InputComponent, ReactiveFormsModule]
})
export class UserInfoComponent{
  fb = inject(FormBuilder)
  apiService = inject(ApiService)
  authService = inject(AuthService)
  editIcon = faEdit
  locationIcon = faLocationDot
  addIcon = faAdd
  imageIcon = faPen
  closeIcon = faClose

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>

  openEditProfileModal = signal(false)
  openAddressModal = signal(false)

  profileForm = this.fb.group({
    id: this.authService.user.userData.id,
    firstName: this.authService.user.userData.firstName,
    email: this.authService.user.userData.email,
    dateOfBirth: this.authService.user.userData.dateOfBirth,
    postalCode: this.authService.user.userData.postalCode,
    city: this.authService.user.userData.city,
    permanentAddress: this.authService.user.userData.permanentAddress,
    lastName: this.authService.user.userData.lastName,
    country: this.authService.user.userData.country
  })

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    console.log(fileList)
  }
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  getProfileControl(name: string){
    return this.profileForm.get(name) as FormControl
  }

  handleOpenEditProfileModal(){
    this.openEditProfileModal.update((prev)=>!prev)
  }

  handleOpenAddressModal(){
    this.openAddressModal.update((prev)=>!prev)
  }

  handleUpdateProfile(){
    this.apiService.updateProfile(this.profileForm.value).subscribe({
      next: (v)=>{
        this.openEditProfileModal.update((prev)=>!prev)
        const user = {...this.authService.user, userData: v}
        this.authService.setUserLocalStorage(user)
        alert('update successful')
      }
    })
  }
}
