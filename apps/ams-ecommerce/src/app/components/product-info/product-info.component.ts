import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CurrencyPipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { ImageBtnComponent } from '../image-btn/image-btn.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [RouterOutlet,RouterLink, NavbarComponent, ImageBtnComponent, UpperCasePipe, CurrencyPipe, PercentPipe],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent {
  router = inject(Router)
  cartService = inject(CartService)
  authService = inject(AuthService)
  productService = inject(ProductService)
  
  products = this.productService.products
  active = 0;
  isActive = true;
  isLoggedIn(){ return this.authService.checkAuth()}
  handleIsActive(index: number){
    return this.active === index
  }
  hangeProductChange(index: number) {
    this.active = index
  }
  decrease(index:number) {
    this.products.map((product, i)=>{
      if(index === i) product.quantity--
    })
  }
  increase(index:number) {
    this.products.map((product, i)=>{
      if(index === i) product.quantity++
    })
  }
  handleAddToCart(productId: number) {
    this.cartService.AddToCart(productId)
  }
}
