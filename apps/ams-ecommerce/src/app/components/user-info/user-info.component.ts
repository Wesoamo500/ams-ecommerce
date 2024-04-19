import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faClose, faEdit,  faLocationDot, faPen } from '@fortawesome/free-solid-svg-icons';
import { OrdersComponent } from "../orders/orders.component";
import { InputComponent } from "../input/input.component";

@Component({
    selector: 'app-user-info',
    standalone: true,
    templateUrl: './user-info.component.html',
    styleUrl: './user-info.component.css',
    imports: [FontAwesomeModule, OrdersComponent, InputComponent]
})
export class UserInfoComponent {
  editIcon = faEdit
  locationIcon = faLocationDot
  addIcon = faAdd
  imageIcon = faPen
  closeIcon = faClose

  openEditProfileModal = signal(false)
  openAddressModal = signal(false)

  handleOpenEditProfileModal(){
    this.openEditProfileModal.update((prev)=>!prev)
  }

  handleOpenAddressModal(){
    this.openAddressModal.update((prev)=>!prev)
  }
}
