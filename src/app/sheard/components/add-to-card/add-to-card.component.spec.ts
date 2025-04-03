import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCardComponent } from './add-to-card.component';

describe('AddToCardComponent', () => {
  let component: AddToCardComponent;
  let fixture: ComponentFixture<AddToCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
