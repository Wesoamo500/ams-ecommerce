import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenSectionsComponent } from './women-sections.component';

describe('WomenSectionsComponent', () => {
  let component: WomenSectionsComponent;
  let fixture: ComponentFixture<WomenSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenSectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
