import { NumberInput } from '@angular/cdk/coercion';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatPaginatorIntl,
  PageEvent,
} from '@angular/material/paginator';
import { SuppliersService } from '../../suppliers/suppliers.service';
import { Supplier } from '../../suppliers/suppliers.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent extends MatPaginatorIntl {
  suppliers!: Supplier[];
  currentPage: number = 0;
  datasource = new MatTableDataSource<Supplier>();

  override nextPageLabel: string = 'Próximo';
  override previousPageLabel: string = 'Anterior';
  override itemsPerPageLabel: string = 'Total por página:';
  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    return `${page + 1} de ${Math.ceil(length / pageSize)}`;
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private supplierService: SuppliersService) {
    super();
  }
}
