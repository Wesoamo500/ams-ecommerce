import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { CartItemComponent } from "../cart/cart-item.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [RouterLink, RouterLinkActive, CartItemComponent]
})
export class NavbarComponent {
  cartService = inject(CartService);
  authService = inject(AuthService);
  open=false
  numberOf(){
    return this.cartService.numberOfProducts
  }
  checkAuth() {
    return this.authService.checkAuth()
  }

  hideCartedItemsCard() {
    this.open = !this.open
  }
}
