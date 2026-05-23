import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
})
export class ReviewComponent {

  reviews: any[] = [];

  constructor() {
    // 👉 Only 10 reviews
    for (let i = 1; i <= 10; i++) {
      this.reviews.push({
        name: 'User ' + i,
        comment: 'This is review ' + i
      });
    }
  }

}