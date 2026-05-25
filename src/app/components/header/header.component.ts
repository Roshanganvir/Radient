import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCheckCircle,
  faSearch,
  faHome,
  faUser,
  faTh,
} from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartLocalStorageService } from '../../services/shopping-cart-local-storage.service';
 
@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  template: `
    <header class="w-full top-0 fixed z-50" style="background: var(--navy);">
 
      <!-- Gold top accent bar -->
      <div style="height:3px; background: var(--gold);"></div>
 
      <!-- ── MAIN NAVBAR ── -->
      <div style="border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between" style="height: 72px;">
 
          <!-- Logo + Company -->
          <div class="flex items-center gap-4">
            <div style="padding:3px; border-radius:50%; border:2px solid var(--gold); display:flex; align-items:center; justify-content:center;">
              <img
                src="assets/radiant-logo.png"
                alt="Radiant Engineers"
                style="height:48px; width:48px; object-fit:contain; border-radius:50%;"
              />
            </div>
            <div>
              <h1 style="color:#fff; font-size:1.2rem; font-weight:700; letter-spacing:0.5px; line-height:1.2;">
                Radiant Engineers
              </h1>
              <p style="color:rgba(255,255,255,0.5); font-size:0.7rem; margin-top:2px; display:flex; align-items:center; gap:4px;">
                <fa-icon [icon]="faMapMarkerAlt" style="font-size:10px;"></fa-icon>
                Pune &amp; Nagpur, Maharashtra
              </p>
              <p style="color:rgba(255,255,255,0.5); font-size:0.7rem; margin-top:1px; display:flex; align-items:center; gap:4px;">
                <fa-icon [icon]="faCheckCircle" style="color:#4ade80; font-size:10px;"></fa-icon>
                GST No. 27CWTPS1346A1ZC
              </p>
            </div>
          </div>
 
          <!-- Desktop Nav Links -->
          <nav class="hidden lg:flex items-center gap-1">
            <a routerLink="/" routerLinkActive="nav-active"
               [routerLinkActiveOptions]="{ exact: true }"
               class="nav-link">HOME</a>
            <a routerLink="/about" routerLinkActive="nav-active"
               [routerLinkActiveOptions]="{ exact: true }"
               class="nav-link">ABOUT US</a>
            <a routerLink="/enquiry-cart" routerLinkActive="nav-active"
               [routerLinkActiveOptions]="{ exact: true }"
               class="nav-link">CONTACT US</a>
          </nav>
 
          <!-- Call Button -->
          <div class="hidden lg:block">
            <a href="tel:8669148239" class="call-btn">
              <fa-icon [icon]="faPhone" style="font-size:13px;"></fa-icon>
              Call Us
            </a>
          </div>
 
        </div>
      </div>
 
      <!-- ── OUR RANGE BAR ── -->
      <div style="background: var(--navy-dark); border-bottom: 1px solid rgba(255,255,255,0.06);">
        <div class="max-w-7xl mx-auto px-6 flex items-center gap-2 overflow-x-auto" style="height:44px;">
 
          <span style="color: var(--gold); font-size:0.75rem; font-weight:700; letter-spacing:0.12em; white-space:nowrap;">
            OUR RANGE
          </span>
          <span style="color:rgba(255,255,255,0.2); margin:0 4px;">|</span>
 
          <a routerLink="/" routerLinkActive="range-active"
             [routerLinkActiveOptions]="{ exact: true }" class="range-link">All Products</a>
          <a routerLink="/false-flooring" routerLinkActive="range-active"
             [routerLinkActiveOptions]="{ exact: true }" class="range-link">False Flooring</a>
          <a routerLink="/ceiling-systems" routerLinkActive="range-active"
             [routerLinkActiveOptions]="{ exact: true }" class="range-link">Ceiling Systems</a>
          <a routerLink="/metal-ceilings" routerLinkActive="range-active"
             [routerLinkActiveOptions]="{ exact: true }" class="range-link">Metal Ceilings</a>
          <a routerLink="/acoustic" routerLinkActive="range-active"
             [routerLinkActiveOptions]="{ exact: true }" class="range-link">Acoustic Panel</a>
          <a routerLink="/favorite-items" routerLinkActive="range-active"
             [routerLinkActiveOptions]="{ exact: true }" class="range-link">Saved Items</a>
 
          <!-- Search -->
          <div class="ml-auto flex items-center gap-2 search-box">
            <fa-icon [icon]="faSearch" style="color:rgba(255,255,255,0.35); font-size:11px;"></fa-icon>
            <input
              type="text"
              placeholder="Search Products/Services"
              class="search-input"
            />
          </div>
 
        </div>
      </div>
 
    </header>
 
    <!-- ── MOBILE BOTTOM NAV ── -->
    <nav class="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden mobile-nav">
      <a routerLink="/" [routerLinkActiveOptions]="{ exact: true }"
         routerLinkActive="mobile-active" class="mobile-tab">
        <fa-icon [icon]="faHome" style="font-size:18px;"></fa-icon>
        <span>Home</span>
      </a>
      <a routerLink="/false-flooring" [routerLinkActiveOptions]="{ exact: true }"
         routerLinkActive="mobile-active" class="mobile-tab">
        <fa-icon [icon]="faTh" style="font-size:18px;"></fa-icon>
        <span>Our Range</span>
      </a>
      <a routerLink="/enquiry-cart" [routerLinkActiveOptions]="{ exact: true }"
         routerLinkActive="mobile-active" class="mobile-tab" style="position:relative;">
        <fa-icon [icon]="faEnvelope" style="font-size:18px;"></fa-icon>
        <span>Contact</span>
        @if (cartItemQuantity() >= 1) {
          <span class="badge badge-warning badge-xs"
                style="position:absolute; top:6px; right:18px;">
            {{ cartItemQuantity() }}
          </span>
        }
      </a>
      <a href="tel:8669148239" class="mobile-tab">
        <fa-icon [icon]="faPhone" style="font-size:18px;"></fa-icon>
        <span>Call Us</span>
      </a>
    </nav>
 
    <!-- Spacer: desktop = header height, mobile = header + bottom nav -->
    <div class="hidden lg:block" style="height:119px;"></div>
    <div class="block lg:hidden" style="height:135px;"></div>
  `,
  styles: `
    /* Nav links */
    .nav-link {
      color: rgba(255,255,255,0.7);
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      padding: 8px 18px;
      border-radius: 6px;
      transition: all 0.2s;
      text-decoration: none;
      white-space: nowrap;
    }
    .nav-link:hover {
      color: var(--gold);
      background: rgba(201,168,76,0.12);
    }
    .nav-link.nav-active {
      background: var(--gold) !important;
      color: var(--navy) !important;
      font-weight: 700;
    }
 
    /* Call button */
    .call-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 20px;
      border-radius: 7px;
      border: 1.5px solid var(--gold);
      color: var(--gold);
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-decoration: none;
      transition: all 0.2s;
    }
    .call-btn:hover {
      background: var(--gold);
      color: var(--navy);
    }
 
    /* Range links */
    .range-link {
      color: rgba(255,255,255,0.55);
      font-size: 0.78rem;
      font-weight: 500;
      padding: 5px 12px;
      border-radius: 5px;
      white-space: nowrap;
      text-decoration: none;
      transition: all 0.2s;
    }
    .range-link:hover {
      color: var(--gold);
      background: rgba(201,168,76,0.1);
    }
    .range-link.range-active {
      color: var(--gold) !important;
      font-weight: 700;
      background: rgba(201,168,76,0.12);
    }
 
    /* Search */
    .search-box {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 6px;
      padding: 5px 12px;
      min-width: 200px;
    }
    .search-input {
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      font-size: 0.75rem;
      width: 100%;
    }
    .search-input::placeholder {
      color: rgba(255,255,255,0.35);
    }
 
    /* Mobile nav */
    .mobile-nav {
      background: var(--navy);
      border-top: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 -2px 16px rgba(0,0,0,0.3);
    }
    .mobile-tab {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      padding: 10px 4px 8px;
      color: rgba(255,255,255,0.4);
      text-decoration: none;
      transition: color 0.2s;
      gap: 3px;
    }
    .mobile-tab span {
      font-size: 10px;
      font-weight: 500;
    }
    .mobile-tab:hover { color: var(--gold); }
    .mobile-tab.mobile-active { color: var(--gold) !important; }
  `,
})
export class HeaderComponent {
  private readonly shoppingCartLocalStorageService = inject(ShoppingCartLocalStorageService);
 
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faCheckCircle = faCheckCircle;
  faSearch = faSearch;
  faHome = faHome;
  faUser = faUser;
  faTh = faTh;
 
  cartItemQuantity = computed(() => this.shoppingCartLocalStorageService.cartItemQuantity());
}