import { Routes } from '@angular/router';
import { CollectionsComponent } from './pages/collections/collections.component';
import { MenSectionsComponent } from './pages/men-sections/men-sections.component';
import { WomenSectionsComponent } from './pages/women-sections/women-sections.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthComponent } from './pages/auth/auth.component';
import { authGuard } from './guard/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NewOrdersComponent } from './components/new-orders/new-orders.component';
import { ProductsCartComponent } from './components/products-cart/products-cart.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: '',
    children: [
      { path: 'collections', component: CollectionsComponent },
      { path: 'men-section', component: MenSectionsComponent },
      { path: 'women-section', component: WomenSectionsComponent },
      {path: 'profile', redirectTo: 'profile/info', pathMatch: 'full'},
      {
        path: 'profile', // Dynamic profile route with a user ID parameter
        component: ProfileComponent,
        children: [
          {path: 'info', component: UserInfoComponent},
          {path: 'new-orders', component: NewOrdersComponent},
          {path: 'products-in-carts', component: ProductsCartComponent}
        ] // Route to your ProfileComponent
      },
    ],
    canActivate: [authGuard],
  },

  { path: 'auth/login', component: AuthComponent },
  { path: 'auth/register', component: AuthComponent },
  { path: '**', component: NotFoundComponent },
];
