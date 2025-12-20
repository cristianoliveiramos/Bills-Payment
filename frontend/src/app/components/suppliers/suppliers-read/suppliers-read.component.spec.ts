import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersReadComponent } from './suppliers-read.component';

describe('SuppliersReadComponent', () => {
  let component: SuppliersReadComponent;
  let fixture: ComponentFixture<SuppliersReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppliersReadComponent]
    });
    fixture = TestBed.createComponent(SuppliersReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
