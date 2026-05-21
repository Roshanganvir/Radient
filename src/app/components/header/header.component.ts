import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faCheckCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartLocalStorageService } from '../../services/shopping-cart-local-storage.service';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  template: `
    <header class="w-full top-0 fixed z-50 bg-base-100 shadow-md">

      <!-- Top Bar -->
      <div class="border-b border-base-300">
        <div class="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">

          <!-- Left: Logo + Company Info -->
          <div class="flex items-center gap-x-4">
            <img
              src="assets/radiant-logo.png"
              alt="Radiant Engineers Logo"
              class="h-14 w-14 object-contain"
            />
            <div>
              <h1 class="text-xl font-bold">Radiant Engineers</h1>
              <p class="text-xs text-gray-500 flex items-center gap-x-1">
                <fa-icon [icon]="faMapMarkerAlt" class="text-gray-400"></fa-icon>
                Pune & Nagpur, Maharashtra
              </p>
              <p class="text-xs text-gray-500 flex items-center gap-x-1">
                <fa-icon [icon]="faCheckCircle" class="text-green-500"></fa-icon>
                GST No. 27CWTPS1346A1ZC
              </p>
            </div>
          </div>

          <!-- Center: Nav Links -->
          <nav class="hidden lg:flex items-center gap-x-1">
            <a routerLink="/" routerLinkActive="bg-primary text-white" [routerLinkActiveOptions]="{ exact: true }"
              class="px-5 py-2 font-semibold text-sm hover:bg-primary hover:text-white transition-all">
              HOME
            </a>
            <a routerLink="/about" routerLinkActive="bg-primary text-white" [routerLinkActiveOptions]="{ exact: true }"
              class="px-5 py-2 font-semibold text-sm hover:bg-primary hover:text-white transition-all">
              ABOUT US
            </a>
            <a routerLink="/enquiry-cart" routerLinkActive="bg-primary text-white" [routerLinkActiveOptions]="{ exact: true }"
              class="px-5 py-2 font-semibold text-sm hover:bg-primary hover:text-white transition-all">
              CONTACT US
            </a>
          </nav>

          <!-- Right: Call + Enquiry Buttons -->
          <div class="hidden lg:flex flex-col gap-y-2">
            <a href="tel:8669148239"
              class="btn btn-outline btn-sm border-primary text-primary hover:bg-primary hover:text-white flex items-center gap-x-2">
              <fa-icon [icon]="faPhone"></fa-icon>
              <div class="text-left">
                <div class="text-xs font-bold">Call 8669148239</div>
                <div class="text-xs opacity-70">Pune & Nagpur</div>
              </div>
            </a>
            <a routerLink="/enquiry-cart"
              class="btn btn-primary btn-sm flex items-center gap-x-2">
              <fa-icon [icon]="faEnvelope"></fa-icon>
              Send Enquiry
              @if (cartItemQuantity() >= 1) {
                <div class="badge badge-warning badge-sm">{{ cartItemQuantity() }}</div>
              }
            </a>
          </div>

        </div>
      </div>

      <!-- Bottom Nav Bar: Our Range -->
      <div class="bg-base-100 border-b border-base-300">
        <div class="max-w-7xl mx-auto px-4 flex items-center gap-x-4 py-2 overflow-x-auto">
          <span class="text-primary font-bold text-sm whitespace-nowrap">OUR RANGE</span>
          <span class="text-gray-400">|</span>
          <a routerLink="/" routerLinkActive="text-primary font-semibold" [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm whitespace-nowrap hover:text-primary transition-all">All Products</a>
          <a routerLink="/false-flooring" routerLinkActive="text-primary font-semibold" [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm whitespace-nowrap hover:text-primary transition-all">False Flooring</a>
          <a routerLink="/ceiling-systems" routerLinkActive="text-primary font-semibold" [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm whitespace-nowrap hover:text-primary transition-all">Ceiling Systems</a>
          <a routerLink="/metal-ceilings" routerLinkActive="text-primary font-semibold" [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm whitespace-nowrap hover:text-primary transition-all">Metal Ceilings</a>
          <a routerLink="/acoustic" routerLinkActive="text-primary font-semibold" [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm whitespace-nowrap hover:text-primary transition-all">Acoustic Panel</a>
          <a routerLink="/favorite-items" routerLinkActive="text-primary font-semibold" [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm whitespace-nowrap hover:text-primary transition-all">Saved Items</a>

          <!-- Search Box -->
          <div class="ml-auto flex items-center border border-base-300 rounded px-2 py-1 gap-x-2 min-w-[180px]">
            <input type="text" placeholder="Search Products/Services" class="text-xs outline-none bg-transparent w-full" />
            <fa-icon [icon]="faSearch" class="text-gray-400 text-xs"></fa-icon>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="block lg:hidden border-t border-base-300 px-4 py-2 flex items-center justify-between">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-sm btn-ghost">☰ Menu</div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow">
            <li><a routerLink="/" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="text-primary">All Products</a></li>
            <li><a routerLink="/false-flooring" routerLinkActive="text-primary" [routerLinkActiveOptions]="{ exact: true }">False Flooring</a></li>
            <li><a routerLink="/ceiling-systems" routerLinkActive="text-primary" [routerLinkActiveOptions]="{ exact: true }">Ceiling Systems</a></li>
            <li><a routerLink="/metal-ceilings" routerLinkActive="text-primary" [routerLinkActiveOptions]="{ exact: true }">Metal Ceilings</a></li>
            <li><a routerLink="/acoustic" routerLinkActive="text-primary" [routerLinkActiveOptions]="{ exact: true }">Acoustic</a></li>
            <li><a routerLink="/favorite-items" routerLinkActive="text-primary" [routerLinkActiveOptions]="{ exact: true }">Saved Items</a></li>
            <li><a routerLink="/enquiry-cart" routerLinkActive="text-primary" [routerLinkActiveOptions]="{ exact: true }">Send Enquiry</a></li>
          </ul>
        </div>
        <a href="tel:8669148239" class="btn btn-primary btn-sm">
          <fa-icon [icon]="faPhone"></fa-icon> Call Us
        </a>
      </div>

    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  private readonly shoppingCartLocalStorageService = inject(ShoppingCartLocalStorageService);

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faCheckCircle = faCheckCircle;
  faSearch = faSearch;

  cartItemQuantity = computed(() => this.shoppingCartLocalStorageService.cartItemQuantity());
}