import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { CartItemComponent } from '../cart/cart-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faSignOut,
  faArrowDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [RouterLink, RouterLinkActive, CartItemComponent, FontAwesomeModule],
})
export class NavbarComponent {
  userIcon = faUser;
  logoutIcon = faSignOut;
  arrowDownIcon = faArrowDown;
  arrowUpIcon = faArrowUp;

  cartService = inject(CartService);
  authService = inject(AuthService);
  router = inject(Router)
  openCart = false;
  openProfile = false;
  numberOf() {
    return this.cartService.numberOfProducts;
  }
  avatar(){
    if(!this.authService.checkAuth() && this.authService.getItem('profileImage')){
      return this.authService.getItem('profileImage');
    }
    return '../../assets/images/image-avatar.png'
   }
  
  checkAuth() {
    return this.authService.checkAuth();
  }

  hideCartedItemsCard() {
    this.openCart = !this.openCart;
  }

  toggleProfile() {
    this.openProfile = !this.openProfile;
 
  }

  handleLogout(){
    localStorage.removeItem('user')
    this.router.navigateByUrl('/')
  }
}
