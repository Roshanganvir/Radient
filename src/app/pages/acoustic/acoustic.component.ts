import { Component, computed, inject, resource } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductCardSkeletonComponent } from '../../components/product-card-skeleton/product-card-skeleton.component';
import { Meta, Title } from '@angular/platform-browser';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-acoustic',
  imports: [ProductCardComponent, ProductCardSkeletonComponent],
  template: `
    <div class="mt-28 pb-10 px-6">
      <div class="max-w-7xl mx-auto mb-6">
        <h2 class="text-xl font-semibold">Acoustic Solutions</h2>
        <p class="text-sm text-gray-400">
         
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
  `,
})
export class AcousticComponent {
    private readonly productCategory = 'Acoustic Ceiling'; // 👈 bas yahi change karo

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Acoustic Solutions — Radiant Engineers');
    this.meta.updateTag({ name: 'description', content: 'Mineral Fibre, Gypsum, PET Acoustic Boards and T-Grid Systems by Radiant Engineers.' });
    this.meta.updateTag({ property: 'og:title', content: 'Acoustic Solutions' });
  }

  private readonly apiService = inject(ApiService);



  
  productsResource = resource({
    loader: () => this.apiService.getProducts(this.productCategory),
  });

  isLoading = computed(() => this.productsResource.isLoading());
}