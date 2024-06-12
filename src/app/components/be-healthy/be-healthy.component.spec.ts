import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeHealthyComponent } from './be-healthy.component';

describe('BeHealthyComponent', () => {
  let component: BeHealthyComponent;
  let fixture: ComponentFixture<BeHealthyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeHealthyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeHealthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
