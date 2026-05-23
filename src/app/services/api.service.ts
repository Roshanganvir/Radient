import { Injectable } from '@angular/core';
import { Product } from '../../type';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private myProducts: Product[] = [
    { id: 1,  title: 'Mineral Fibre Ceiling Board 600x600',   price: 50,   category: 'Acoustic Ceiling',  image: 'ceiling/1.jpg', description: 'High quality mineral fibre ceiling board. Size 600x600mm. Excellent sound absorption and thermal insulation. Suitable for offices, hospitals and schools.' },
    { id: 2,  title: 'Gypsum False Ceiling Board 12mm',        price: 320,  category: 'Gypsum Ceiling',    image: 'ceiling/2.jpg', description: 'Premium gypsum ceiling board 12mm thickness. Fire resistant, moisture resistant. Ideal for commercial and residential interiors.' },
    { id: 3,  title: 'PET Acoustic Ceiling Panel',             price: 850,  category: 'Acoustic Ceiling',  image: 'ceiling/3.jpg', description: 'Eco-friendly PET acoustic ceiling panel. Made from recycled polyester. Superior noise reduction coefficient. Available in multiple colors.' },
    { id: 4,  title: 'SS Lay-In Grid T-Bar System',            price: 280,  category: 'T-Grid System',     image: 'ceiling/4.jpg', description: 'Stainless steel lay-in T-bar grid system. Corrosion resistant, lightweight. Compatible with 600x600 and 600x1200 ceiling tiles.' },
    { id: 5,  title: 'Metal Baffle Ceiling System',            price: 1200, category: 'Metal Ceiling',     image: 'ceiling/5.jpg', description: 'GI powder coated metal baffle ceiling. Open linear design for modern interiors. Suitable for malls, airports and commercial spaces.' },
    { id: 6,  title: 'Anti-Static False Floor Panel 600x600',  price: 1800, category: 'False Flooring',    image: 'ceiling/6.jpg', description: 'CISCA certified anti-static laminated false floor panel. 600x600mm steel panel with HPL finish. Ideal for server rooms and data centers.' },
    { id: 7,  title: 'Open Cell Ceiling Grid System',          price: 950,  category: 'Metal Ceiling',     image: 'ceiling/7.jpg', description: 'Aluminium open cell ceiling grid. Powder coated finish. Easy installation and maintenance. Perfect for commercial and retail spaces.' },
    { id: 8,  title: 'Clip-In Metal Ceiling Panel',            price: 780,  category: 'Metal Ceiling',     image: 'ceiling/1.jpg', description: 'GI clip-in metal ceiling panel. Non-corrosive, moisture resistant. Lightweight and easy to install. Ideal for clean rooms and hospitals.' },
    { id: 9,  title: 'Linear Metal Ceiling 84C',               price: 1100, category: 'Metal Ceiling',     image: 'ceiling/2.jpg', description: 'Linear 84C metal ceiling system. Aluminium powder coated finish. Continuous linear look for modern commercial spaces.' },
    { id: 10, title: 'Expanded Metal Mesh Ceiling',            price: 1350, category: 'Metal Ceiling',     image: 'ceiling/3.jpg', description: 'Expanded metal mesh ceiling panel. GI/Aluminium material with powder coated finish. Decorative and functional for retail and office spaces.' },
    { id: 11, title: 'Sun Louver Ceiling System',              price: 1650, category: 'Metal Ceiling',     image: 'ceiling/4.jpg', description: 'Aluminium sun louver ceiling system. Powder coated finish. Controls light and ventilation. Ideal for outdoor and semi-outdoor spaces.' },
    { id: 12, title: 'Concealed T-Grid Ceiling System',        price: 420,  category: 'T-Grid System',     image: 'ceiling/5.jpg', description: 'Concealed T-grid ceiling system. Clean and seamless look. Compatible with gypsum and mineral fibre boards. Easy access for maintenance.' },
    { id: 13, title: 'Moisture Resistant Ceiling Tile',        price: 380,  category: 'Gypsum Ceiling',    image: 'ceiling/6.jpg', description: 'Moisture resistant ceiling tile 600x600mm. Suitable for high humidity areas. Mold and mildew resistant.' },
    { id: 14, title: 'Acoustic Baffles Hanging System',        price: 2200, category: 'Acoustic Ceiling',  image: 'ceiling/7.jpg', description: 'Hanging acoustic baffle system. Superior sound absorption for large open spaces. Available in various colors and sizes.' },
    { id: 15, title: 'PVC False Ceiling Panel',                price: 180,  category: 'Gypsum Ceiling',    image: 'ceiling/1.jpg', description: 'Lightweight PVC false ceiling panel. Water resistant and easy to clean. Suitable for residential and light commercial use.' },
    { id: 16, title: 'Steel False Floor Pedestal',             price: 650,  category: 'False Flooring',    image: 'ceiling/2.jpg', description: 'Adjustable steel pedestal for false flooring. Height adjustable 150-500mm. Heavy duty load bearing. Suitable for data centers.' },
    { id: 17, title: 'HPL False Floor Panel',                  price: 2100, category: 'False Flooring',    image: 'ceiling/3.jpg', description: 'High pressure laminate false floor panel. Anti-static surface. 600x600mm size. Suitable for computer rooms and control centers.' },
    { id: 18, title: 'Calcium Silicate Ceiling Board',         price: 520,  category: 'Acoustic Ceiling',  image: 'ceiling/4.jpg', description: 'Calcium silicate ceiling board. Fire resistant up to 1000°C. Moisture proof and termite resistant. Ideal for industrial applications.' },
    { id: 19, title: 'Perforated Gypsum Ceiling Board',        price: 410,  category: 'Gypsum Ceiling',    image: 'ceiling/5.jpg', description: 'Perforated gypsum ceiling board with acoustic backing. Improves sound absorption. Available in various perforation patterns.' },
    { id: 20, title: 'Aluminium Honeycomb Ceiling Panel',      price: 1950, category: 'Metal Ceiling',     image: 'ceiling/6.jpg', description: 'Aluminium honeycomb ceiling panel. Ultra lightweight with high strength. Corrosion resistant. Ideal for airports and metro stations.' },
  ];

  async getProducts(category?: string): Promise<Product[]> {
    if (category) {
      return this.myProducts.filter(p => p.category === category);
    }
    return this.myProducts;
  }

  async getProductsWithLimit(limit: number, category?: string): Promise<Product[]> {
    const products = category
      ? this.myProducts.filter(p => p.category === category)
      : this.myProducts;
    return products.slice(0, limit);
  }

  async getProductById(id: string): Promise<Product | null> {
    return this.myProducts.find(p => p.id === Number(id)) ?? null;
  }
}