import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBtnComponent } from './image-btn.component';

describe('ImageBtnComponent', () => {
  let component: ImageBtnComponent;
  let fixture: ComponentFixture<ImageBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
