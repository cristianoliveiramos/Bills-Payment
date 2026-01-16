import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersCrudComponent } from './suppliers-crud.component';

describe('SuppliersCrudComponent', () => {
  let component: SuppliersCrudComponent;
  let fixture: ComponentFixture<SuppliersCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppliersCrudComponent]
    });
    fixture = TestBed.createComponent(SuppliersCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
