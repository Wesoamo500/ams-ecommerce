import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  productService = inject(ProductService)
  cartService = inject(CartService)
  @Input() productId!: number;

  product = this.productService.products.filter(product=> product.productId!==this.productId)
  
  removeProductFromCart(id: number) {
    this.cartService.removeFromCart(id)
  }
}
