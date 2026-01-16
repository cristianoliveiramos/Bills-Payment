import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Supplier } from '../suppliers.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppliersService } from '../suppliers.service';

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.component.html',
  styleUrls: ['./supplier-update.component.scss'],
})
export class SupplierUpdateComponent {
  supplier!: Supplier;

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
  supplierTelephoneValidation = new FormControl<string>('', [
    Validators.required,
    Validators.min(10),
    Validators.max(11),
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
