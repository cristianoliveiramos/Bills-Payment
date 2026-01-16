import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuppliersService } from '../suppliers.service';
import { Supplier } from '../suppliers.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-suppliers-create',
  templateUrl: './suppliers-create.component.html',
  styleUrls: ['./suppliers-create.component.scss'],
})
export class SuppliersCreateComponent {
  supplier: Supplier = {
    name: undefined,
    code: undefined,
    shortname: undefined,
    telephone: undefined,
  };

  constructor(
    private router: Router,
    private serviceSupplier: SuppliersService
  ) {}

  supplierCodeValidation = new FormControl<number>(0, [
    Validators.required,
    Validators.min(2),
    Validators.max(10),
  ]);
  supplierNameValidation = new FormControl<string>('', [
    Validators.required,
    Validators.min(3),
    Validators.pattern('[a-zA-Z]*'),
  ]);
  supplierShortNameValidation = new FormControl<string>('', [
    Validators.required,
    Validators.min(3),
    Validators.pattern('[a-zA-Z]'),
  ]);
  supplierTelephoneValidation = new FormControl<string>('', [
    Validators.required,
    Validators.min(10),
    Validators.max(11),
  ]);

  createSupplier() {
    this.serviceSupplier.create(this.supplier).subscribe(() => {
      this.serviceSupplier.showMessage('Empresa Criada com sucesso!', false);
    });
    this.router.navigate(['/fornecedores']);
  }

  cancel() {
    this.router.navigate(['/fornecedores']);
  }
}
