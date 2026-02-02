import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Supplier } from '../suppliers.model';

@Component({
  selector: 'app-supplier-read-infos',
  templateUrl: './supplier-read-infos.component.html',
  styleUrls: ['./supplier-read-infos.component.scss'],
})
export class SupplierReadInfosComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Supplier, private dialog: MatDialog) {}


}

