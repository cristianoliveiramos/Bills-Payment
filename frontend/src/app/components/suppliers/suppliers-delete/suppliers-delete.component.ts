import { Component, OnInit } from '@angular/core';
import { Supplier } from '../suppliers.model';
import { SuppliersService } from '../suppliers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-suppliers-delete',
  templateUrl: './suppliers-delete.component.html',
  styleUrls: ['./suppliers-delete.component.scss'],
})
export class SuppliersDeleteComponent implements OnInit {
  supplier!: Supplier;

  constructor(
    private supplierService: SuppliersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.supplierService
      .readById(id)
      .subscribe((supplier) => (this.supplier = supplier));
  }

  cancel() {
    this.router.navigate(['/fornecedores']);
  }

  deleteSupplier(): void {
    this.supplierService.delete(this.supplier.id).subscribe(() => {
      this.supplierService.showMessage(
        'Fornecedor removido com sucesso!',
        false
      );
      this.router.navigate(['/fornecedores']);
    });
  }
}
