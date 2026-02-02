import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierReadInfosComponent } from './supplier-read-infos.component';

describe('SupplierReadInfosComponent', () => {
  let component: SupplierReadInfosComponent;
  let fixture: ComponentFixture<SupplierReadInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierReadInfosComponent]
    });
    fixture = TestBed.createComponent(SupplierReadInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
