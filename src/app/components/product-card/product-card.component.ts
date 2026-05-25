import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../../type';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoppingCartLocalStorageService } from '../../services/shopping-cart-local-storage.service';
import { Router } from '@angular/router';
import { FavoriteItemsLocalStorageService } from '../../services/favorite-items-local-storage.service';
 
@Component({
  selector: 'app-product-card',
  imports: [FontAwesomeModule],
  template: `
    <div
      (click)="onClickNavigate()"
      class="border border-base-300 rounded-lg overflow-hidden cursor-pointer
             hover:shadow-lg hover:-translate-y-1 transition-all duration-200
             bg-white h-full flex flex-col"
    >
      <!-- Image -->
      <div class="w-full h-[200px] overflow-hidden border-b border-base-300">
        <img
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          [src]="product()?.image"
          [alt]="product()?.title"
        />
      </div>
 
      <!-- Body -->
      <div class="flex flex-col flex-1 p-4">
 
        <!-- Category badge — Gold -->
        <span class="text-xs font-bold uppercase tracking-widest mb-1"
              style="color: var(--gold);">
          {{ product()?.category }}
        </span>
 
        <!-- Title — Navy -->
        <h2 class="font-semibold text-sm leading-snug mb-2 line-clamp-2"
            style="color: var(--navy);">
          {{ product()?.title }}
        </h2>
 
        <!-- Description lines -->
        <div class="flex-1 border-t border-base-300 pt-2 space-y-1">
          @for (line of descriptionLines(); track line) {
            <p class="text-xs text-base-content/60 border-b border-dashed border-base-300 pb-1 line-clamp-1">
              {{ line }}
            </p>
          }
        </div>
 
        <!-- Price + Favorite -->
        <div class="mt-3 flex items-center justify-between">
          <span class="font-bold text-sm" style="color: var(--gold);">
            Rs {{ product()?.price }}
          </span>
 
          <button
            (click)="$event.stopPropagation(); toggleFavoriteItem()"
            [style.color]="checkFavoriteItemAlreadyExist() ? 'var(--gold)' : ''"
            [class]="checkFavoriteItemAlreadyExist()
              ? 'text-lg transition-colors'
              : 'text-lg transition-colors text-base-content/30 hover:text-accent'"
          >
            <fa-icon [icon]="faHeart"></fa-icon>
          </button>
        </div>
 
        <!-- Get Product Details button — Navy bg, Gold text -->
        <button
          (click)="$event.stopPropagation(); onClickNavigate()"
          class="mt-3 w-full text-xs py-2 rounded transition-all duration-200
                 hover:opacity-90 active:scale-95"
          style="background-color: var(--navy); color: var(--gold); border: none;"
        >
          + Get Product Details
        </button>
 
      </div>
    </div>
  `,
})
export class ProductCardComponent {
  private readonly shoppingCartLocalStorageService = inject(ShoppingCartLocalStorageService);
  private readonly favoriteItemsLocalStorageService = inject(FavoriteItemsLocalStorageService);
  private readonly router = inject(Router);
 
  faHeart = faHeart;
  product = input<Product>();
 
  cartItems = computed(() => this.shoppingCartLocalStorageService.cartItems());
 
  descriptionLines = computed(() => {
    const desc = this.product()?.description ?? '';
    const sentences = desc.match(/[^.!?]+[.!?]*/g) ?? [desc];
    return sentences.slice(0, 3).map(s => s.trim()).filter(Boolean);
  });
 
  checkItemAlreadyExist() {
    return this.shoppingCartLocalStorageService.checkItemAlreadyExist(this.product()?.id!);
  }
 
  addItem() {
    this.shoppingCartLocalStorageService.addItem({ ...this?.product()!, quantity: 1 });
  }
 
  checkFavoriteItemAlreadyExist() {
    return this.favoriteItemsLocalStorageService.checkItemAlreadyExist(this.product()?.id!);
  }
 
  toggleFavoriteItem() {
    if (this.checkFavoriteItemAlreadyExist()) {
      this.favoriteItemsLocalStorageService.removeItem(this.product()!);
    } else {
      this.favoriteItemsLocalStorageService.addItem(this.product()!);
    }
  }
 
  onClickNavigate() {
    this.router.navigate(['/products', this.product()?.id]);
  }
}