import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuppliersService } from '../suppliers.service';
import { States, Supplier } from '../suppliers.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-suppliers-create',
  templateUrl: './suppliers-create.component.html',
  styleUrls: ['./suppliers-create.component.scss'],
})
export class SuppliersCreateComponent {
  states: States[] = [
    { uf: 'AC' },
    { uf: 'AL' },
    { uf: 'AP' },
    { uf: 'AM' },
    { uf: 'BA' },
    { uf: 'CE' },
    { uf: 'DF' },
    { uf: 'ES' },
    { uf: 'GO' },
    { uf: 'MA' },
    { uf: 'MS' },
    { uf: 'MT' },
    { uf: 'MG' },
    { uf: 'PA' },
    { uf: 'PB' },
    { uf: 'PR' },
    { uf: 'PE' },
    { uf: 'PI' },
    { uf: 'RJ' },
    { uf: 'RN' },
    { uf: 'RS' },
    { uf: 'RO' },
    { uf: 'RR' },
    { uf: 'SC' },
    { uf: 'SP' },
    { uf: 'SE' },
    { uf: 'TO' },
  ];

  supplier: Supplier = {
    code: undefined,
    name: undefined,
    shortname: undefined,
    cnpj: undefined,
    state_inscription: undefined,
    telephone: undefined,
    address: undefined,
    city: undefined,
    neighborhood: undefined,
    state: undefined,
    zip_code: undefined,
    representative_sales: undefined,
    representative_whatsapp: undefined
  };

  constructor(
    private router: Router,
    private serviceSupplier: SuppliersService,
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
  supplierContactValidation = new FormControl<string>('', [
    Validators.required,
    Validators.min(10),
    Validators.max(11),
  ]);
  supplierCNPJValidation = new FormControl<string>('', [
    Validators.required,
    Validators.min(18),
    Validators.max(18),
  ]);
  supplierAddressValidation = new FormControl<string>('', [
    Validators.required,
    Validators.min(10),
    Validators.max(50),
  ]);
  supplierCityValidation = new FormControl<string>('', [
    Validators.required,
    Validators.min(10),
    Validators.max(50),
  ]);
  supplierNeighborhoodValidation = new FormControl<string>('', [
    Validators.required,
    Validators.min(10),
    Validators.max(50),
  ]);
  supplierZipcodeValidation = new FormControl<string>('', [
    Validators.required,
    Validators.min(10),
    Validators.max(50),
  ]);
  supplierRepresentativeSalesValidation = new FormControl<string>('', [
    Validators.min(10),
    Validators.max(50),
  ]);
  supplierRepresentativeContactValidation = new FormControl<string>('', [
    Validators.min(10),
    Validators.max(50),
  ]);
  supplierStateInscriptionValidation = new FormControl<string>('', [
    Validators.min(10),
    Validators.max(50),
  ]);
  supplierCitynscriptionValidation = new FormControl<string>('', [
    Validators.min(10),
    Validators.max(50),
  ]);

  createSupplier() {
    console.log(this.supplier)
    this.serviceSupplier.create(this.supplier).subscribe(() => {
      this.serviceSupplier.showMessage('Empresa Criada com sucesso!', false);
    });
    this.router.navigate(['/fornecedores']);
  }

  cancel() {
    this.router.navigate(['/fornecedores']);
  }
}
