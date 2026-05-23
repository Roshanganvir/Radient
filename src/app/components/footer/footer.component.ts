import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>

      <!-- CONTACT SECTION -->
      <div class="grid md:grid-cols-2">
        <div class="bg-indigo-600 text-white p-8 space-y-6">
          <h2 class="text-xl font-semibold">Radiant Engineers</h2>
          <div>
            <p class="text-sm opacity-70">CONTACT PERSON</p>
            <p class="font-semibold">Mr.Anshul Soni</p>
          </div>
          <div>
            <p class="text-sm opacity-70">ADDRESS</p>
            <p>Vishrantwadi, Pune - 411015<br/>Ambedkar Square, Nagpur - 440008</p>
          </div>
          <div>
            <p class="text-sm opacity-70">CONTACT NUMBER</p>
            <p class="font-semibold text-lg">8669148239</p>
          </div>
        </div>

        <div class="bg-gray-100 p-8">
          <h2 class="text-xl font-semibold mb-4">CONTACT US</h2>
          <textarea class="w-full border p-3 mb-4 rounded" rows="4"
            placeholder="Describe your requirement"></textarea>
          <button class="bg-indigo-600 text-white px-6 py-2 rounded">Submit</button>
        </div>
      </div>

      <!-- RATINGS SUMMARY -->
      <div class="bg-white py-10 px-6">
        <h2 class="text-center text-xl font-semibold mb-1">
          Ratings & Reviews
        </h2>
        <div class="w-12 h-0.5 bg-orange-400 mx-auto mb-8"></div>

        <!-- Summary Row -->
        <div class="grid md:grid-cols-3 border border-gray-200 rounded-lg overflow-hidden mb-8">

          <!-- Score -->
          <div class="flex flex-col items-center justify-center p-6 border-r border-gray-200">
            <p class="text-5xl font-medium">4.3<span class="text-2xl text-gray-400">/5</span></p>
            <p class="text-yellow-400 text-xl mt-2">★★★★<span class="text-gray-300">★</span></p>
            <p class="text-sm text-gray-500 mt-1">Reviewed by 38 Users</p>
          </div>

          <!-- Star Bars -->
          <div class="p-6 border-r border-gray-200">
            <div *ngFor="let bar of starBars" class="flex items-center gap-2 mb-2">
              <span class="text-sm text-gray-500 w-6 text-right">{{ bar.label }}</span>
              <div class="flex-1 bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full"
                  [style.width]="bar.pct + '%'"></div>
              </div>
              <span class="text-sm text-gray-500 w-8 text-right">{{ bar.pct }}%</span>
            </div>
          </div>

          <!-- Satisfaction -->
          <div class="p-6">
            <p class="text-sm font-semibold mb-4 flex items-center gap-1">
              👍 User Satisfaction
            </p>
            <div *ngFor="let sat of satisfaction" class="flex items-center gap-2 mb-3">
              <span class="text-sm text-gray-500 w-16">{{ sat.label }}</span>
              <div class="flex-1 bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full"
                  [style.width]="sat.pct + '%'"></div>
              </div>
              <span class="text-sm text-gray-500 w-8 text-right">{{ sat.pct }}%</span>
            </div>
          </div>

        </div>

        <!-- Review Cards -->
        <p class="text-sm font-semibold text-gray-600 mb-4">Most Relevant Reviews</p>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div *ngFor="let review of visibleReviews"
            class="border border-gray-200 rounded-lg p-4">
            <div class="flex justify-between items-start mb-2">
              <span class="text-yellow-400">★★★★★</span>
              <span class="text-xs text-gray-400">{{ review.date }}</span>
            </div>
            <div class="flex items-center gap-2 mb-1">
              <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center
                justify-content-center text-sm font-semibold text-gray-600
                flex items-center justify-center">
                {{ review.name[0] }}
              </div>
              <div>
                <p class="text-sm font-semibold">{{ review.name }}</p>
                <p class="text-xs text-gray-400">{{ review.location }}</p>
              </div>
            </div>
            <p class="text-xs text-gray-500 mt-2">Product Name: {{ review.product }}</p>
          </div>
        </div>

        <!-- View More -->
        <div class="text-center" *ngIf="!showAll">
          <button (click)="showAll = true"
            class="border border-blue-600 text-blue-600 px-8 py-2 rounded
            hover:bg-blue-50 text-sm">
            View More Reviews
          </button>
        </div>

      </div>

      <!-- DARK FOOTER -->
      <div class="bg-gray-900 text-white px-8 py-8">
        <div class="grid md:grid-cols-2 gap-8 pb-6 border-b border-gray-700">
          <div>
            <p class="text-sm font-semibold tracking-widest mb-4">OUR COMPANY</p>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white">About Us</a></li>
              <li><a href="#" class="hover:text-white">Our Products</a></li>
              <li><a href="#" class="hover:text-white">Contact Us</a></li>
              <li><a href="#" class="hover:text-white">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <p class="text-sm font-semibold tracking-widest mb-4">OUR PRODUCTS</p>
            <div class="grid grid-cols-2 gap-2 text-sm text-gray-400">
              <a href="#" class="hover:text-white">Ceiling Design</a>
              <a href="#" class="hover:text-white">Metal Louver</a>
              <a href="#" class="hover:text-white">False Flooring</a>
              <a href="#" class="hover:text-white">Anti Static False Flooring</a>
              <a href="#" class="hover:text-white">Ceiling Tile</a>
              <a href="#" class="hover:text-white">Mineral Fiber Ceiling</a>
              <a href="#" class="hover:text-white">Ceiling Tiles</a>
              <a href="#" class="hover:text-white">Baffle Ceiling</a>
            </div>
          </div>
        </div>
        <div class="pt-4 text-center text-xs text-gray-500">
          © {{ year }} Radiant Engineers. All Rights Reserved.
        </div>
      </div>

    </footer>
  `,
})
export class FooterComponent {

  year = new Date().getFullYear();
  showAll = false;

  starBars = [
    { label: '5★', pct: 66 },
    { label: '4★', pct: 5 },
    { label: '3★', pct: 5 },
    { label: '2★', pct: 5 },
    { label: '1★', pct: 19 },
  ];

  satisfaction = [
    { label: 'Response', pct: 70 },
    { label: 'Quality',  pct: 85 },
    { label: 'Delivery', pct: 80 },
  ];

  reviews = [
    { name: 'Suresh Kumar',  location: 'Bengaluru, Karnataka',    product: 'Baffle Ceilings',                   date: '20-Feb-26' },
    { name: 'Uttam Gupta',   location: 'Ahilyanagar, Maharashtra', product: 'PVC Laminated Gypsum Ceiling Tiles', date: '30-Dec-25' },
    { name: 'Sanjay Autade', location: 'Kopargaon, Maharashtra',  product: 'Aluminium False Ceilings',           date: '23-Sep-25' },
    { name: 'Rohan Sharma',  location: 'Delhi',                   product: 'Metal Ceiling',                      date: '10-Sep-25' },
    { name: 'Priya Verma',   location: 'Mumbai',                  product: 'Grid Ceiling',                       date: '05-Aug-25' },
    { name: 'Amit Joshi',    location: 'Pune',                    product: 'Gypsum Board',                       date: '22-Jul-25' },
  ];

  get visibleReviews() {
    return this.showAll ? this.reviews : this.reviews.slice(0, 3);
  }

}