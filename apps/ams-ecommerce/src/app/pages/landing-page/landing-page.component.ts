import { Component, inject } from '@angular/core';
import { CollectionsComponent } from "../collections/collections.component";
import { ProductService } from '../../services/product.service';

import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ReviewsCardComponent } from "../../components/reviews-card/reviews-card.component";
import { ProductInfoComponent } from "../../components/product-info/product-info.component";


@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
    imports: [ProductCardComponent, ReviewsCardComponent, ProductInfoComponent]
})
export class LandingPageComponent {
    productService = inject(ProductService)

    productDescription = this.productService.products[0].description;
    reviews = this.productService.products[0].reviews
    products = this.productService.products!
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
}
