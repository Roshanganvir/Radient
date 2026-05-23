import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

          <!-- Name Field -->
          <input
            [(ngModel)]="contactName"
            type="text"
            class="w-full border p-3 mb-3 rounded"
            placeholder="Your Name"
          />

          <!-- Phone Field -->
          <input
            [(ngModel)]="contactPhone"
            type="tel"
            class="w-full border p-3 mb-3 rounded"
            placeholder="Your Phone Number"
          />

          <!-- Message Field -->
          <textarea
            [(ngModel)]="contactMessage"
            class="w-full border p-3 mb-4 rounded"
            rows="4"
            placeholder="Describe your requirement"
          ></textarea>

          <!-- Validation Error -->
          @if (showError) {
            <p class="text-red-500 text-sm mb-3">⚠️ Please enter your requirement before submitting.</p>
          }

          <!-- Submit Button -->
          <button
            (click)="submitToWhatsApp()"
            class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition-all flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.541 5.878L.057 23.943l6.244-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.925 0-3.722-.511-5.271-1.402l-.371-.221-3.878.91.961-3.768-.242-.389A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Submit via WhatsApp
          </button>
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
  showError = false;

  // Contact form fields
  contactName = '';
  contactPhone = '';
  contactMessage = '';

  submitToWhatsApp() {
    // Validation: message required
    if (!this.contactMessage.trim()) {
      this.showError = true;
      return;
    }
    this.showError = false;

    // Build WhatsApp message with all form data
    let msg = `*New Enquiry - Radiant Engineers*\n\n`;

    if (this.contactName.trim()) {
      msg += `*Name:* ${this.contactName.trim()}\n`;
    }
    if (this.contactPhone.trim()) {
      msg += `*Phone:* ${this.contactPhone.trim()}\n`;
    }
    msg += `\n*Requirement:*\n${this.contactMessage.trim()}`;

    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/917350930357?text=${encodedMsg}`, '_blank');

    // Clear form after submit
    this.contactName = '';
    this.contactPhone = '';
    this.contactMessage = '';
  }

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