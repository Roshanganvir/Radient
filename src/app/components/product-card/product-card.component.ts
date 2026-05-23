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
      class="border border-gray-200 rounded-lg overflow-hidden cursor-pointer
             hover:shadow-md transition-shadow bg-white h-full flex flex-col"
    >
      <!-- Image -->
      <div class="w-full h-[200px] overflow-hidden border-b border-gray-100">
        <img
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          [src]="product()?.image"
          [alt]="product()?.title"
        />
      </div>

      <!-- Body -->
      <div class="flex flex-col flex-1 p-4">

        <!-- Category badge -->
        <span class="text-xs text-gray-400 uppercase tracking-wide mb-1">
          {{ product()?.category }}
        </span>

        <!-- Title -->
        <h2 class="font-semibold text-gray-800 text-sm leading-snug mb-2 line-clamp-2">
          {{ product()?.title }}
        </h2>

        <!-- Sub items (description lines) -->
        <div class="flex-1 border-t border-gray-100 pt-2 space-y-1">
          @for (line of descriptionLines(); track line) {
            <p class="text-xs text-gray-500 border-b border-dashed border-gray-200 pb-1 line-clamp-1">
              {{ line }}
            </p>
          }
        </div>

        <!-- Price + Actions row -->
        <div class="mt-3 flex items-center justify-between">
          <span class="text-green-600 font-semibold text-sm">
            Rs {{ product()?.price }}
          </span>

          <!-- Favorite -->
          <button
            (click)="$event.stopPropagation(); toggleFavoriteItem()"
            [class]="checkFavoriteItemAlreadyExist()
              ? 'text-indigo-600'
              : 'text-gray-300 hover:text-indigo-400'"
            class="text-lg transition-colors"
          >
            <fa-icon [icon]="faHeart"></fa-icon>
          </button>
        </div>

        <!-- View All button -->
        <button
          (click)="$event.stopPropagation(); onClickNavigate()"
          class="mt-3 w-full border border-indigo-600 text-indigo-600 text-xs
                 py-1.5 rounded hover:bg-indigo-50 transition-colors"
        >
          + Get Product Details
        </button>

      </div>
    </div>
  `,
})
export class ProductCardComponent {
  private readonly shoppingCartLocalStorageService = inject(
    ShoppingCartLocalStorageService
  );
  private readonly favoriteItemsLocalStorageService = inject(
    FavoriteItemsLocalStorageService
  );
  private readonly router = inject(Router);

  faHeart = faHeart;
  product = input<Product>();

  cartItems = computed(() => this.shoppingCartLocalStorageService.cartItems());

  // Split description into 3 bullet lines
  descriptionLines = computed(() => {
    const desc = this.product()?.description ?? '';
    const sentences = desc.match(/[^.!?]+[.!?]*/g) ?? [desc];
    return sentences.slice(0, 3).map(s => s.trim()).filter(Boolean);
  });

  checkItemAlreadyExist() {
    return this.shoppingCartLocalStorageService.checkItemAlreadyExist(
      this.product()?.id!
    );
  }

  addItem() {
    this.shoppingCartLocalStorageService.addItem({
      ...this?.product()!,
      quantity: 1,
    });
  }

  checkFavoriteItemAlreadyExist() {
    return this.favoriteItemsLocalStorageService.checkItemAlreadyExist(
      this.product()?.id!
    );
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