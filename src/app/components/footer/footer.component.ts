import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="border-t border-t-base-300 mt-10 pt-10 pb-6">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          <!-- Company Info -->
          <div>
            <h3 class="font-bold text-lg mb-3">Radiant Engineers</h3>
            <p class="text-sm text-gray-400 leading-6">
              Authorized dealer of USG Boral & Laban products. Specialists in
              Anti-Static False Flooring, Ceiling Systems, Metal Ceilings,
              and Acoustic Solutions.
            </p>
          </div>

          <!-- Offices -->
          <div>
            <h3 class="font-bold text-lg mb-3">Our Offices</h3>
            <div class="text-sm text-gray-400 space-y-2">
              <p>📍 Vishrantwadi, Pune - 411015</p>
              <p>📍 Ambedkar Square, Nagpur - 440008</p>
            </div>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="font-bold text-lg mb-3">Contact Us</h3>
            <div class="text-sm text-gray-400 space-y-2">
              <p>📞 8669148239</p>
              <p>✉️ Radiantengineers22&#64;rediffmail.com</p>
              <p>🧾 GST: 27CWTPS1346A1ZC</p>
            </div>
          </div>

        </div>

        <div class="border-t border-t-base-300 pt-4 text-center text-sm text-gray-500">
          <p>Copyright &copy; {{ currentYear }} Radiant Engineers. All rights reserved.</p>
          <p class="mt-1">Authorized Dealer — USG Boral & Laban</p>
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}