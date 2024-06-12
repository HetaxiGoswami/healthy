import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTipsComponent } from './simple-tips.component';

describe('SimpleTipsComponent', () => {
  let component: SimpleTipsComponent;
  let fixture: ComponentFixture<SimpleTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
