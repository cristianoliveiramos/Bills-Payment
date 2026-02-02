import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { States, Supplier } from '../suppliers.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppliersService } from '../suppliers.service';

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.component.html',
  styleUrls: ['./supplier-update.component.scss'],
})
export class SupplierUpdateComponent {
  supplier!: Supplier;

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private supplierService: SuppliersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.supplierService
      .readById(id)
      .subscribe((supplier) => (this.supplier = supplier));
  }

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

  cancel() {
    this.router.navigate(['/fornecedores']);
  }

  updateSupplier(): void {
    this.supplierService.update(this.supplier).subscribe(() => {
      this.supplierService.showMessage("Fornecedor Atualizado com sucesso", false)
      this.router.navigate(["/fornecedores"])
    })
  }
}
