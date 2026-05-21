import { Component, computed, inject, resource } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductCardSkeletonComponent } from '../../components/product-card-skeleton/product-card-skeleton.component';
import { Meta, Title } from '@angular/platform-browser';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-metal-ceilings',
  imports: [ProductCardComponent, ProductCardSkeletonComponent, FooterComponent],
  template: `
    <div class="mt-28 pb-10 px-6">
      <div class="max-w-7xl mx-auto mb-6">
        <h2 class="text-xl font-semibold">Metal Ceilings</h2>
        <p class="text-sm text-gray-400">
          Expanded Metal Mesh, Open Cell, Baffle, Linear 84C, Linear 84R,
          Sun Louver systems. GI/Aluminium, powder coated finish.
        </p>
      </div>
      @if (isLoading()) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto max-w-7xl gap-6">
          @for (item of [1,2,3,4]; track item) {
            <app-product-card-skeleton />
          }
        </div>
      } @else {
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
export class MetalCeilingsComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Metal Ceilings — Radiant Engineers');
    this.meta.updateTag({ name: 'description', content: 'Expanded Metal Mesh, Baffle, Linear, Open Cell Ceiling systems by Radiant Engineers.' });
    this.meta.updateTag({ property: 'og:title', content: 'Metal Ceilings' });
  }

  private readonly productCategory = 'jewelery'; // replace with your actual API category
  private readonly apiService = inject(ApiService);

  productsResource = resource({
    loader: () => this.apiService.getProducts(this.productCategory),
  });

  isLoading = computed(() => this.productsResource.isLoading());
}