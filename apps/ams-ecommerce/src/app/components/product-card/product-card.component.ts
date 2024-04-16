import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../data/types/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, NgFor],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() index!:number
}
