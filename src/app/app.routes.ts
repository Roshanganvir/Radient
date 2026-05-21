import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FalseFlooringComponent } from './pages/false-flooring/false-flooring.component';
import { CeilingSystemsComponent } from './pages/ceiling-systems/ceiling-systems.component';
import { MetalCeilingsComponent } from './pages/metal-ceilings/metal-ceilings.component';
import { AcousticComponent } from './pages/acoustic/acoustic.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { FavoriteItemsComponent } from './pages/favorite-items/favorite-items.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home — Radiant Engineers',
    component: HomeComponent,
  },
  {
    path: 'favorite-items',
    title: 'Saved Items — Radiant Engineers',
    component: FavoriteItemsComponent,
  },
  {
    path: 'products/:id',
    title: 'Product Details — Radiant Engineers',
    component: ProductDetailComponent,
  },
  {
    path: 'false-flooring',
    title: 'False Flooring — Radiant Engineers',
    component: FalseFlooringComponent,
  },
  {
    path: 'ceiling-systems',
    title: 'Ceiling Systems — Radiant Engineers',
    component: CeilingSystemsComponent,
  },
  {
    path: 'metal-ceilings',
    title: 'Metal Ceilings — Radiant Engineers',
    component: MetalCeilingsComponent,
  },
  {
    path: 'acoustic',
    title: 'Acoustic Solutions — Radiant Engineers',
    component: AcousticComponent,
  },
  {
    path: 'enquiry-cart',
    title: 'Enquiry Cart — Radiant Engineers',
    component: ShoppingCartComponent,
  },
];