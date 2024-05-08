import { Component, inject, OnInit } from '@angular/core';
import { CollectionsComponent } from "../collections/collections.component";
import { ProductService } from '../../services/product.service';

import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ReviewsCardComponent } from "../../components/reviews-card/reviews-card.component";
import { ProductInfoComponent } from "../../components/product-info/product-info.component";
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { AsyncPipe } from '@angular/common';


@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
    imports: [ProductCardComponent, ReviewsCardComponent, ProductInfoComponent, AsyncPipe]
})
export class LandingPageComponent implements OnInit {
    productService = inject(ProductService)
    apiServices = inject(ApiService)
    productDescription = this.productService.products[0].description;
    reviews = this.productService.products[0].reviews
    products:any = [];
    active = 'description';
    isComment = true;
    onToggle(){
        return `${this.active}Style`
    }
    handleToggle(type: string){
        this.active = type;
    }
    reviewStyle(){
        return 'text-[#3e3e3e]'
    }
    descriptionStyle(){
        return 'text-[#ff7900]'
    }
    avatar(user: string){
        return user.split(' ')[0].charAt(0) + user.split(' ')[1].charAt(0)
    }
    ngOnInit(): void {
        this.apiServices.fetchProduct().subscribe((v)=> this.products.push(v[Math.floor(Math.random()*v.length)], v[Math.floor(Math.random()*v.length)], v[Math.floor(Math.random()*v.length)], v[Math.floor(Math.random()*v.length)]))
        console.log(this.products)
    }
}
