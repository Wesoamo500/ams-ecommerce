import { Injectable } from '@angular/core';
import { Products } from '../../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = Products
}
