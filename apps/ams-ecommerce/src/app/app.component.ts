import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartService } from './services/cart.service';
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent{
  numberOfCartProducts:number = this.cartService.numberOfProducts;
  constructor(private cartService: CartService){   
  }
}
