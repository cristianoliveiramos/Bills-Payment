import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Supplier } from '../suppliers.model';
import {
  MatPaginator,
  MatPaginatorIntl,
  PageEvent,
} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SuppliersDataSource } from '../suppliers-datasource';
import { SuppliersService } from '../suppliers.service';
import { Router } from '@angular/router';

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
  datasource = new MatTableDataSource<Supplier>();

  displayedColumns = ['id', 'code', 'name', 'shortname', 'telephone', 'action'];

  currentPage: number = 0;

  constructor(
    private suppliersService: SuppliersService,
    private router: Router,
  ) {}

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
