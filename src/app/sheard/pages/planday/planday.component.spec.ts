import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlandayComponent } from './planday.component';

describe('PlandayComponent', () => {
  let component: PlandayComponent;
  let fixture: ComponentFixture<PlandayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlandayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlandayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
