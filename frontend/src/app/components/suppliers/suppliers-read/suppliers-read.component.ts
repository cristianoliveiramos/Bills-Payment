import { Component, OnInit, ViewChild } from '@angular/core';
import { Supplier } from '../suppliers.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SuppliersDataSource } from '../suppliers-datasource';
import { SuppliersService } from '../suppliers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliers-read',
  templateUrl: './suppliers-read.component.html',
  styleUrls: ['./suppliers-read.component.scss']
})

export class SuppliersReadComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatTable) table!: MatTable<Supplier>
  datasource: SuppliersDataSource

  suppliers!: Supplier[];
  displayedColumns = ['id', 'code', 'name', 'shortname', 'telephone', 'action']

  constructor(private suppliersService: SuppliersService, private router: Router) {
    this.datasource = new SuppliersDataSource()
  }


  ngOnInit(): void {
    this.suppliersService.read().subscribe(suppliers => {
      this.suppliers = suppliers
    })
  }

}
