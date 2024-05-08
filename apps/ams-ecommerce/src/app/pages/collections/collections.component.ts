import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
    selector: 'app-collections',
    standalone: true,
    templateUrl: './collections.component.html',
    styleUrl: './collections.component.css',
    imports: [AsyncPipe, JsonPipe, CommonModule, ProductCardComponent]
})
export class CollectionsComponent implements OnInit {
  api = inject(ApiService);

  products$!: Observable<any>;

  ngOnInit(): void {
    this.products$ = this.api.fetchProduct();
  }
}
