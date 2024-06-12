import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeMindfulComponent } from './be-mindful.component';

describe('BeMindfulComponent', () => {
  let component: BeMindfulComponent;
  let fixture: ComponentFixture<BeMindfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeMindfulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeMindfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
