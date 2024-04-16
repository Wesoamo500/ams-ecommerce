import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenSectionsComponent } from './men-sections.component';

describe('MenSectionsComponent', () => {
  let component: MenSectionsComponent;
  let fixture: ComponentFixture<MenSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenSectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
