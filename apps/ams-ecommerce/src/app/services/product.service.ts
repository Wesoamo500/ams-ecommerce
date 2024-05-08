import { inject, Injectable, OnInit } from '@angular/core';
import { Products } from '../../data/products';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  apiService = inject(ApiService)
  products = Products 

  fetchProducts(){
    
  }
}
