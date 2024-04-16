import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  authService = inject(AuthService)
  router = inject(Router)
  productServices = inject(ProductService)

  constructor() {
  }
  cartProducts:number[] = []
  numberOfProducts: number = 0;

  updateNumberOfProducts(count: number) {
    this.numberOfProducts = count;
  }
  AddToCart(productId: number) {
    if(this.authService.checkAuth()){
      this.router.navigateByUrl('auth/login')
    }
    if(this.cartProducts.includes(productId)) return
    this.cartProducts = [...this.cartProducts, productId]
    this.updateNumberOfProducts(this.cartProducts.length)
  }
  removeFromCart(productId: number){
    this.cartProducts = this.cartProducts.filter((id) => id !== productId);
    this.updateNumberOfProducts(this.cartProducts.length);
  }
}
