import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreHelthyComponent } from './more-helthy.component';

describe('MoreHelthyComponent', () => {
  let component: MoreHelthyComponent;
  let fixture: ComponentFixture<MoreHelthyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreHelthyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreHelthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
