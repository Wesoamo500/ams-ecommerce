import { Component, Input } from '@angular/core';
import { Review, ReviewReplies } from '../../../data/types/product';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reviews-card',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './reviews-card.component.html',
  styleUrl: './reviews-card.component.css'
})
export class ReviewsCardComponent {

  @Input() isComment!:boolean;
  @Input() reviews!:Review;

  avatar(user: string){
    return user.split(' ')[0].charAt(0) + user.split(' ')[1].charAt(0)
  }
  openComment(){
    this.isComment = !this.isComment
  }
}
