import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { MenSectionsComponent } from './pages/men-sections/men-sections.component';
import { WomenSectionsComponent } from './pages/women-sections/women-sections.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthComponent } from './pages/auth/auth.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'collections', component: CollectionsComponent },
    { path: 'men-section', component: MenSectionsComponent},
    { path: 'women-section', component: WomenSectionsComponent, canActivate:[authGuard] },
    { path: 'auth/login', component: AuthComponent },
    { path: 'auth/register', component: AuthComponent },
    { path: '**', component: NotFoundComponent },
];
