import { Component, computed, inject, effect, resource } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductCardSkeletonComponent } from '../../components/product-card-skeleton/product-card-skeleton.component';
import { Meta, Title } from '@angular/platform-browser';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, ProductCardSkeletonComponent, FooterComponent],
  template: `
    <!-- Hero Banner -->
    <div class="mt-36 bg-base-200 py-12 px-6 text-center">
      <h1 class="text-3xl lg:text-5xl font-bold mb-3">Radiant Engineers</h1>
      <p class="text-gray-400 text-lg mb-1">Authorized Dealer — USG Boral & Laban</p>
      <p class="text-gray-500 text-sm">
        False Flooring • Ceiling Systems • Metal Ceilings • Acoustic Solutions
      </p>
    </div>

    <!-- Products Grid -->
    <div class="mt-8 pb-10 px-6">
      @if (isLoading()) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto max-w-7xl gap-6">
          @for (item of [1,2,3,4]; track item) {
            <app-product-card-skeleton />
          }
        </div>
      } @else {
        <div class="max-w-7xl mx-auto mb-6">
          <h2 class="text-xl font-semibold">All Products</h2>
          <p class="text-sm text-gray-400">Browse our complete range of building solutions</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto max-w-7xl gap-6">
          @for (product of productsResource.value(); track product.id) {
            <app-product-card [product]="product" />
          }
        </div>
      }
    </div>
    <app-footer />
  `,
})
export class HomeComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Radiant Engineers — All Products');
    this.meta.updateTag({ name: 'description', content: 'Radiant Engineers — Authorized dealer of USG Boral & Laban. False Flooring, Ceiling Systems, Metal Ceilings, Acoustic Solutions.' });
    this.meta.updateTag({ property: 'og:title', content: 'Radiant Engineers' });
  }

  private readonly apiService = inject(ApiService);

  productsResource = resource({
    loader: () => this.apiService.getProducts(),
  });

  isLoading = computed(() => this.productsResource.isLoading());

  errorEffect = effect(() => {
    const error = this.productsResource.error() as Error;
    if (error) console.log(error);
  });
}