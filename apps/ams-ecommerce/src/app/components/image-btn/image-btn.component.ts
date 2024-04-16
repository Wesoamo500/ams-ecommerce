import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-btn',
  standalone: true,
  imports: [],
  templateUrl: './image-btn.component.html',
  styleUrl: './image-btn.component.css'
})
export class ImageBtnComponent {
  @Input() src!: string;
  index!: number;
  @Input() isActive!: boolean;

  @Output() productIndex = new EventEmitter()
  
  displayProduct(value: number) {
    this.productIndex.emit(value);
  }
}
