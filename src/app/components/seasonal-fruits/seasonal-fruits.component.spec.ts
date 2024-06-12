import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalFruitsComponent } from './seasonal-fruits.component';

describe('SeasonalFruitsComponent', () => {
  let component: SeasonalFruitsComponent;
  let fixture: ComponentFixture<SeasonalFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasonalFruitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeasonalFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
