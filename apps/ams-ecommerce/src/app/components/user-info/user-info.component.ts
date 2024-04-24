import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faClose, faEdit,  faEnvelope,  faLocationDot, faPen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { OrdersComponent } from "../orders/orders.component";
import { InputComponent } from "../input/input.component";
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { AddressFormComponent } from "../address-form/address-form.component";
import { SharedService } from '../../services/shared.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';


@Component({
    selector: 'app-user-info',
    standalone: true,
    templateUrl: './user-info.component.html',
    styleUrl: './user-info.component.css',
    imports: [FontAwesomeModule, OrdersComponent, InputComponent, ReactiveFormsModule, AddressFormComponent, NgIf, AsyncPipe]
})
export class UserInfoComponent implements OnInit{
  fb = inject(FormBuilder)
  apiService = inject(ApiService)
  authService = inject(AuthService)
  sharedService = inject(SharedService)
  editIcon = faEdit
  locationIcon = faLocationDot
  addIcon = faAdd
  imageIcon = faPen
  closeIcon = faClose
  mailIcon = faEnvelope
  phoneIcon = faPhone

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>

  openEditProfileModal = signal(false)
  openAddressModal = this.sharedService.openAddressModal
  userEmail = signal(this.authService.getItem('email'))
  userName = signal(`${this.authService.getItem('firstName')} ${this.authService.getItem('lastName')}`)
  userProfile = signal(this.authService.getItem('profileImage'))
  userProfileChange = signal(this.authService.getItem('profileImage'));
  phoneNumber = signal(this.authService.getItem('phoneNumber'))

  addresses = this.sharedService.addresses

  profileForm = this.fb.group({
    id: this.authService.user.userData.id,
    firstName: this.authService.user.userData.firstName,
    email: this.authService.user.userData.email,
    dateOfBirth: this.authService.user.userData.dateOfBirth,
    postalCode: this.authService.user.userData.postalCode,
    city: this.authService.user.userData.city,
    permanentAddress: this.authService.user.userData.permanentAddress,
    lastName: this.authService.user.userData.lastName,
    country: this.authService.user.userData.country,
    phoneNumber: this.authService.user.userData.phoneNumber,
    profileImage: this.userProfile()
  })

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
  
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            const MAX_WIDTH = 800;
            const MAX_HEIGHT = 600;
            let width = img.width;
            let height = img.height;
  
            if (width > height) {
              if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
              }
            } else {
              if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
              }
            }
  
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(img, 0, 0, width, height);
            const base64String = canvas.toDataURL('image/jpeg', 0.5);
            this.userProfileChange.update(()=> base64String);
            this.profileForm.patchValue({ profileImage: base64String });
          };
  
          img.src = reader.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        console.error('Please select an image file.');
      }
    }
  }
  
  ngOnInit(): void {
    this.apiService.fetchAddress().subscribe((data:any) => {
      this.sharedService.addresses.next(data);
    });
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
    return this.sharedService.handleOpenAddressModal()
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
