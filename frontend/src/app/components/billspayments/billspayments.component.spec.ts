import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillspaymentsComponent } from './billspayments.component';

describe('BillspaymentsComponent', () => {
  let component: BillspaymentsComponent;
  let fixture: ComponentFixture<BillspaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillspaymentsComponent]
    });
    fixture = TestBed.createComponent(BillspaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
