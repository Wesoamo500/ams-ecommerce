import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
  openCart = false;
  openProfile = false;
  numberOf() {
    return this.cartService.numberOfProducts;
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
  }

 
  
}
