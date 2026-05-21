import { Injectable } from '@angular/core';
import { Product } from '../../type';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://fakestoreapi.com';

  private mapProducts(products: any[]): Product[] {
    return products.map((p: any, index: number) => ({
      ...p,
      image: `ceiling/${((index % 7) + 1)}.jpg`
    }));
  }

  async getProducts(category?: string): Promise<Product[]> {
    const res = await fetch(
      category
        ? `${this.url}/products/category/${category}`
        : `${this.url}/products`
    );
    const data = await res.json();
    return this.mapProducts(data);
  }

  async getProductsWithLimit(limit: number, category?: string): Promise<Product[]> {
    const res = await fetch(
      category
        ? `${this.url}/products/category/${category}?limit=${limit}`
        : `${this.url}/products?limit=${limit}`
    );
    const data = await res.json();
    return this.mapProducts(data);
  }

  async getProductById(id: string): Promise<Product | null> {
    const res = await fetch(`${this.url}/products/${id}`);
    const data = await res.json();
    if (!data) return null;
    return {
      ...data,
      image: `ceiling/${((Number(id) % 7) + 1)}.jpg`
    };
  }
}