import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../suppliers/suppliers.model';
import { SuppliersService } from '../../suppliers/suppliers.service';
import { Installments } from '../payment.model';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.scss']
})
export class PaymentCreateComponent implements OnInit{
  suppliers!: Supplier[]
  installments: Installments[] = [
    {value: 1, viewValue: 'À vista'},
    {value: 2, viewValue: 'Parcelado em 2'},
    {value: 3, viewValue: 'Parcelado em 3'},
    {value: 4, viewValue: 'Parcelado em 4'},
    {value: 5, viewValue: 'Parcelado em 5'},
    {value: 6, viewValue: 'Parcelado em 6'},
    {value: 7, viewValue: 'Parcelado em 7'},
    {value: 8, viewValue: 'Parcelado em 8'},
    {value: 9, viewValue: 'Parcelado em 9'},
    {value: 10, viewValue: 'Parcelado em 10'},
  ]

  constructor(private supplierService: SuppliersService) {}

  ngOnInit(): void {
    this.supplierService.read().subscribe(suppliers => this.suppliers = suppliers)
  }

}
