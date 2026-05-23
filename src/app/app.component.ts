import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { themeChange } from 'theme-change';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>

    <main class="min-h-screen flex flex-col">
      <div class="flex-grow">
        <router-outlet></router-outlet>
      </div>

      <!-- ✅ ONLY FOOTER (with reviews inside) -->
      <app-footer></app-footer>
    </main>
  `,
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    themeChange(false);
  }
}