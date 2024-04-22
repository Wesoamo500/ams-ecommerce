import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() id: string | undefined;
  @Input() label: string | undefined;
  @Input() type!: string;
  @Input() value!: string | null;
  @Input() control: FormControl = new FormControl();
}
