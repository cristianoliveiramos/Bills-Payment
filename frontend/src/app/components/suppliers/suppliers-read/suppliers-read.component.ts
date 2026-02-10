import { SupplierReadInfosComponent } from './../supplier-read-infos/supplier-read-infos.component';
import { Supplier } from './../suppliers.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  PageEvent,
} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { SuppliersService } from '../suppliers.service';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-suppliers-read',
  templateUrl: './suppliers-read.component.html',
  styleUrls: ['./suppliers-read.component.scss'],
})
export class SuppliersReadComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Supplier>;

  suppliers!: Supplier[];
  supplier!: Supplier;
  datasource = new MatTableDataSource<Supplier>();

  displayedColumns = ['id', 'code', 'name', 'shortname', 'whatsapp', 'telephone', 'action'];

  currentPage: number = 0;

  constructor(
    private suppliersService: SuppliersService,
    private dialog: MatDialog,
  ) {}

  openDialog($event: Event) {
    this.dialog.open(SupplierReadInfosComponent, {
      data: $event,
      enterAnimationDuration: '500ms ',
      width: '80vw',
      height: '80vh',
    });
  }

  ngOnInit(): void {
    this.suppliersService.read().subscribe((suppliers) => {
      this.suppliers = suppliers;
      this.datasource = new MatTableDataSource<Supplier>(this.suppliers);
      this.datasource.paginator = this.paginator;
    });
  }

  handlePageEvent($event: PageEvent) {
    this.currentPage = $event.pageIndex;
    console.log(this.currentPage);
  }
}
